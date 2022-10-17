import "./Gallery.css";
import UserContext from "../components/UserContext";
import Form from "../components/Form";
import React from "react";
import { useState, useEffect, useContext } from "react";

export default function Gallery(props) {
  const [images, setImages] = useState(null);
  const [imageIsLoading, setImageIsLoading] = useState(true);

  const user = useContext(UserContext);
  const fileInput = React.useRef();
  const dummyRef = React.useRef();

  let imageCount = 0;
  let dataCount = 0;
  const handleImageLoaded = () => {
    imageCount += 1;

    if (imageCount >= dataCount) {
      console.log("Gallery Loaded")
      setImageIsLoading(false)
    }
  };

  const GalleryElement = ({ photo }) => {
    return (
      <div className="GalleryElement">
        <img src={photo.images[0].link} alt=""></img>
        <div className="GalleryInfo">
          <div className="ElementTitle">{photo.title}</div>
          <div
            className="ElementContent"
            dangerouslySetInnerHTML={{ __html: photo.text }}
          ></div>
        </div>
      </div>
    );
  };

  const handleUpload = (event, form) => {
    event.preventDefault();
    console.log(form);
    let uploadform = new FormData();
    for (let i = 0; i < fileInput.current.files.length; i++) {
      uploadform.append(
        fileInput.current.files[i].name,
        fileInput.current.files[i]
      );
    }

    if (fileInput.current.files.length > 0) {
      console.log("YES");
      fetch("/api/posts/upload", {
        method: "POST",
        body: uploadform,
        credentials: "include",
      })
        .then((data) => data.json())
        .then((data) => {
          //comes back as an array
          const payload = {
            type: "photo",
            title: form.title,
            text: form.text,
            images: data.locations,
          };

          console.log(payload);

          return fetch(`api/posts`, {
            body: JSON.stringify(payload),
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
        })
        .then((data) => data.json())
        .then((result) => {
          console.log(result);
          setImages([result, ...images]);
        })
        .catch((error) => error);
    }
  };

  //get gallery
  useEffect(() => {
    fetch("/api/posts/gallery", {
      headers: {
        accepts: "application/json",
      },
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {

        const imgList = data.sort((a, b) => (a._id < b._id) ? 1 : -1);
        dataCount = imgList.length;
        setImages(imgList);

        imgList.forEach((img) => {
          const image = new Image();
          image.onload = handleImageLoaded;
          image.src = img.images[0].link;
        });
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);

  return (
    <div className="Gallery">
      <h1 className="Heading">Gallery {user.loggedInUser}</h1>
      {user === true ? (
        <>
          <div>Image Uploader</div>
          <Form
            handleSubmit={handleUpload}
            formFields={["title", "text", "images"]}
            formTypes={["text", "textarea", "file"]}
            multiple={[false, false, true]}
            refers={[dummyRef, dummyRef, fileInput]}
            defaultValue={[null, null, null]}
            title="Upload!"
          />
          <div className="Spacer"></div>
        </>
      ) : (
        <></>
      )}
      <div className="ProjectElement">
        <div className="ProjectInfo">
            <div className="ProjElementTitle">
                Amateur Photography Board 📸
            </div>
            <div className="ProjElementContent">
                I post all my photos on Instagram <a className="HyperGold" href="https://www.instagram.com/bentropy.wake/" target="_blank" rel="noreferrer">here</a> but I upload some of my favourites to this page every now and then.
            </div>
        </div>
      </div>
      <section className="GalleryContainer">
        {imageIsLoading ? (
          <div><h2>Loading Gallery...</h2></div>
        ) : (
          images.map((imageItem, key) => (
            <GalleryElement key={key} photo={imageItem} />
          ))
        )}
        <span class="GalleryElement break"></span>
        <span class="GalleryElement break"></span>
        <span class="GalleryElement break"></span>
        <span class="GalleryElement break"></span>
        <span class="GalleryElement break"></span>
      </section>
    </div>
  );
}
