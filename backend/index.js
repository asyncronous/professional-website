//npm init
//yarn add express
//install nodemon globally
//yarn add mongoose

const express = require("express")
const path = require("path")
const app = express()
const mongoose = require("mongoose")
const fileupload = require("express-fileupload");
const cors = require("cors")

const { config } = require('dotenv');
config();

// gets rid of a depr message
mongoose.set('useCreateIndex', true);

const username = process.env.USERNAME  
const password = process.env.PASSWORD
const database = process.env.DBNAME  

let connectionString = `mongodb+srv://${username}:${password}@cluster0.p9ozz.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to the database"))
.catch(error => console.log(error))

let whitelist = ['http://localhost:3000', '*', 'dev']
let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// app.get('/products/:id', cors(corsOptions), function (req, res, next) {
//     res.json({msg: 'This is CORS-enabled for a whitelisted domain.'})
// })

app.use(express.json())
app.use(fileupload());

//routes
// app.use("/posts", cors(corsOptions), require("./routes/post.js"))

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use("/api/posts", require("./routes/post.js"))

app.get("/api", (request, response) => {
    // console.log(request)
    console.log("Root Path - Get Request")
    response.status(200).send({message: "Good Morning Emylia"})
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(process.env.PORT || 5001, () => {})

module.exports = {app}