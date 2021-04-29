// import { Link } from 'react-router-dom'
import "./Gallery.css";
import UserContext from "../components/UserContext";
import Form from "../components/Form";
import React from "react";
import { useState, useEffect, useContext } from "react";
import LazyLoad from "react-lazyload"

export default function Gallery(props) {
  const [images, setImages] = useState(null);

  const user = useContext(UserContext);
  const fileInput = React.useRef();
  const dummyRef = React.useRef();

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
        //   if (!result.ok) { throw result }
        return result.json();
      })
      .then((data) => {
        setImages(data.reverse());
        //   setErrors([])
        console.log(data);
        console.log(user);
      })
      .catch((error) => {
        //   error.json()
        //   .then(data => {
        //     console.log(data.error)
        //     // setErrors(data.error)
        //   })
        console.log("Error");
      });
  }, []);

  return (
    <div className="Gallery">
      <h1 className="Heading">Gallery {user.loggedInUser}</h1>
      {user === false ? (
        <>
          <div>Image Uploader</div>
          <Form
            className="DarkText"
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
                I post all my photos on Instagram <a href="https://www.instagram.com/bentropy.wake/" target="_blank" rel="noreferrer">here</a> but I upload some of my favourites to this page every now and then.
            </div>
        </div>
      </div>
      <section className="GalleryContainer">
        {images === null ? (
          <></>
        ) : (
          images.map((imageItem, key) => (
            // <LazyLoad key={key} placeholder={<div><h5>Loading...</h5></div>}>
                <GalleryElement key={key} photo={imageItem} />
            // </LazyLoad>
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
