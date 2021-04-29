// import { Link } from 'react-router-dom'
import "./Projects.css";
import "./Gallery.css";
import "./Lightbox.css";
import UserContext from "../components/UserContext";
import Form from "../components/Form";
import React from "react";
import { 
  useState, 
  useEffect, 
  useContext 
} from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  // clearAllBodyScrollLocks,
} from "body-scroll-lock";

export default function Projects(props) {
  const [projects, setProjects] = useState(null);

  const user = useContext(UserContext);
  const fileInput = React.useRef();
  const dummyRef = React.useRef();

  const ProjectElement = ({ projects }) => {
    return (
      <div className="ProjectElement" id={`${projects._id}`}>
        <div className="ProjectInfo">
          <div className="ProjElementTitle">
            {projects.title}
          </div>
          <div
            className="ProjElementContent"
            dangerouslySetInnerHTML={{ __html: projects.text }}
          >
          </div>
        </div>
      </div>
    );
  };

  const disableScroll = (e, target) => {
    // e.preventDefault()
    disableBodyScroll(target);
  };
  const enableScroll = (e, target) => {
    // e.preventDefault()
    enableBodyScroll(target);
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
            type: "project",
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
          setProjects([result, ...projects]);
        })
        .catch((error) => error);
    }
  };

  //get projects
  useEffect(() => {
    fetch("/api/posts/projects", {
      headers: {
        accepts: "application/json",
      },
    })
      .then((result) => {
        //   if (!result.ok) { throw result }
        return result.json();
      })
      .then((data) => {
        setProjects(data.reverse());
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
    <div className="Projects">
      <h1 className="Heading">Portfolio {user.loggedInUser}</h1>
      {user === true ? (
        <>
          <div>Project Uploader</div>
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
                App Portfolio Page 💻
            </div>
            <div className="ProjElementContent">
                Here lies all of my deployed projects, most recent at the top. Each entry has a title, description, and some screenshots that you can click on to zoom in!
            </div>
        </div>
      </div>
      <section className="ProjectsContainer">
        {projects === null ? (
          <></>
        ) : (
          projects.map((projectItem, key) => (
            <>
              <ProjectElement key={key} projects={projectItem} />
              <div className="ProjGalleryContainer">
                {projectItem.images.map((image, key) => (
                  <>
                    <a className="lightbox GalleryElement"
                      href={`#${image._id}`}
                      onClick={(event) =>
                        disableScroll(
                          event,
                          document.querySelector(`[id='${image._id}']`)
                        )
                      }
                    >
                      <img key={key} src={image.link} alt=""></img>
                    </a>
                    <div className="lightbox-target" id={`${image._id}`}>
                      <img key={key} src={image.link} alt=""></img>
                      <a className="lightbox-close"
                        href={`#${projectItem._id}`}
                        onClick={(event) =>
                          enableScroll(
                            event,
                            document.querySelector(`[id='${image._id}']`)
                          )
                        }
                      >Back</a>
                    </div>
                  </>
                ))}
              </div>
            </>
          ))
        )}
      </section>
    </div>
  );
}
