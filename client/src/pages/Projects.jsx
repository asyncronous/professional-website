import "./Projects.css";
import "./Gallery.css";
import "./Lightbox.css";
import "../components/Loading.css";
import UserContext from "../components/UserContext";
import Form from "../components/Form";
import React from "react";
import { 
  useState, 
  useEffect, 
  useContext 
} from "react";
import fscreen from 'fscreen';

export default function Projects(props) {
  const [projects, setProjects] = useState(null);
  const [isFullScreen, setFullScreen] = useState(fscreen.fullscreenElement);
  const [imageIsLoading, setImageIsLoading] = useState(true);

  const user = useContext(UserContext);
  const fileInput = React.useRef();
  const dummyRef = React.useRef();

  let imageCount = 0;
  let dataCount = 0;

  const handleImageLoaded = () => {
    imageCount += 1;

    if (imageCount >= dataCount) {
      console.log("Projects Loaded")
      setImageIsLoading(false)
    }
  };

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
        return result.json();
      })
      .then((data) => {
        const projList = data.sort((a, b) => (a._id < b._id) ? 1 : -1);
        const projImages = projList.map(proj => proj.images).flat();
        dataCount = projImages.length;
        setProjects(projList);

        projImages.forEach((img) => {
          const image = new Image();
          image.onload = handleImageLoaded;
          image.src = img.link;
        });

      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);

  const openFullscreen = ((key) => {
    let elem = document.getElementById(`${key}`)

    if (!fscreen.fullscreenElement) {
      fscreen.requestFullscreen(elem);
      setFullScreen(true)
    }
    else {
      fscreen.exitFullscreen();
      setFullScreen(false)
    }
  });

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
                Here are all of my personal dev projects, most recent at the top. Links to code and deployed sites where applicable. Click the images to fullscreen them. 📸
            </div>
        </div>
      </div>
      {imageIsLoading ? (
        <div class="LoadingContainer">
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <section className="ProjectsContainer">
          {projects.map((projectItem, key) => (
            <>
              <ProjectElement key={key} projects={projectItem} />
              <div className="ProjGalleryContainer">
                {projectItem.images.map((image, key) => (
                  <>
                    <span className={"GalleryElement " + (isFullScreen ? 'disabled' : 'enabled')} >
                      <img onClick={() => openFullscreen(image.link)} id={image.link} key={key} src={image.link} alt=""></img>
                    </span>
                  </>
                ))}
              </div>
            </>
          ))}
        </section>
      )}
    </div>
  );
}
