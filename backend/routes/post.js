//get express library
const express = require("express")

//define router obj from express
const router = express.Router()

//import the job model
const PostModel = require("../models/post.js")

//import aws upload library
const AWS = require('aws-sdk');

//define each of the aws variables from env
const ID = process.env.AWS_ID
const SECRET = process.env.AWS_SECRET
const BUCKET_NAME = process.env.AWS_BUCKET

//upload image/s
router.post("/upload", (req, res) => {

    //console logs for debug to check existence of files in upload
    console.log(req.files)
    console.log(Object.keys(req.files).length)

    //create obj that will store links for the response obj back to front end
    const locations = {
        num: Object.keys(req.files).length,
        links: []
    };

    //initial function that iterates through the files, creating a promise that recieves the s3Upload callback function
    const uploadFileNew = (arrOfFiles, locations) => {
        var promises=[];
        for (const [key, value] of Object.entries(arrOfFiles)) {
            promises.push(s3Upload(value, locations));
        }
        Promise.all(promises)
        .catch(function(err){
            res.send(err);
            // console.log(err)
        })         
    }
    
    //for each file in the obj, this function uploads the file to aws and returns a url, and then adds that url to the locations obj
    //once the locations links arr length equals the length of the files initially fed to the function it sends the location links object back to the front end
    const s3Upload = (obj, locations) => {

        const s3 = new AWS.S3({
            accessKeyId: ID,
            secretAccessKey: SECRET
        })

        const params = {
            Bucket: BUCKET_NAME,
            Key: obj.name, // File name you want to save as in S3
            Body: obj.data
        };

        // Uploading files to the bucket
        s3.upload(params, (err, data) => {
            if (err) {
                throw err;
            }
            console.log(`File uploaded successfully.`);
            locations.links.push({link: data.Location})
            console.log(locations)
            console.log(data.Location);

            // return location
            if (locations.links.length === locations.num){
                res.send({locations: locations.links})
            }
        })
    }

    //runs the upload file new function, feeding in the files sent from the request, and the empty locations obj
    uploadFileNew(req.files, locations)
})

//gets the list of posts
router.get("/", (request, response) => {
    PostModel.find()
        .then(posts => {
            console.log("Getting all posts")
            response.status(200).send(posts)
        })
        .catch(error => {
            console.log(error)
            response.status(400).send({"error": "Something wrong CREATE"})
        })
})

//gets the blog
router.get("/blog", (request, response) => {
    PostModel.find({type: "blog"})
        .then(posts => {
            console.log("Getting all blog posts")
            response.status(200).send(posts)
        })
        .catch(error => {
            console.log(error)
            response.status(400).send({"error": "Something wrong CREATE"})
        })
})

//gets the gallery
router.get("/gallery", (request, response) => {
    PostModel.find({type: "photo"})
        .then(posts => {
            console.log("Getting all photos")
            response.status(200).send(posts)
        })
        .catch(error => {
            console.log(error)
            response.status(400).send({"error": "Something wrong CREATE"})
        })
})

//gets the projects
router.get("/projects", (request, response) => {
    PostModel.find({type: "project"})
        .then(posts => {
            console.log("Getting all projects")
            response.status(200).send(posts)
        })
        .catch(error => {
            console.log(error)
            response.status(400).send({"error": "Something wrong CREATE"})
        })
})

//create new post
router.post("/", (request, response) => {
    PostModel.create(request.body)
        .then(post => {
            console.log(post.title)
            response.status(200).send(post)
        })
        .catch(error => {
            console.log(error)
            response.status(400).send({"error": "Something wrong CREATE"})
        })
})

//edit post
router.put("/:id", (request, response) => {
    PostModel.findByIdAndUpdate(request.params.id, request.body, {new: true})
        .then(post => {
            console.log(post.title)
            response.status(200).send(post)
        })
        .catch(error => {
            console.log(error)
            response.status(400).send({"error": "Something wrong EDIT"})
        })
})

//delete post
router.delete("/:id", (request, response) => {
    const shortener = (link) => {
        let key = link.substring(link.lastIndexOf("/") + 1, link.length);
        return key
    }

    const s3Delete = (location) => {

        const s3 = new AWS.S3({
            accessKeyId: ID,
            secretAccessKey: SECRET
        })

        const params = {
            Bucket: BUCKET_NAME,
            Key: shortener(location) // File name you want to save as in S3
        };

        // Uploading files to the bucket
        s3.deleteObject(params, (err, data) => {
            if (err) {
                throw err;
            }
            console.log(`File deleted successfully.`);
            console.log(location)
        })
    }


    PostModel.findById(request.params.id)
        .then(post => {
            //get links from post
            //delete all images using links
            post.images.forEach(image => {
                s3Delete(image.link)
            })
            // s3Delete(post.image)

            post.delete()
            return 
        })
        .then(() => {
            console.log("Post Deleted")
            response.status(200).send("Post Deleted")
        })
        .catch(error => {
            console.log(error)
            response.status(400).send({"error": "Something wrong DELETE"})
        })
})

module.exports = router