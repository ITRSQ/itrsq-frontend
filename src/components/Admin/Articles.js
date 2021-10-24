// Packages
import { useState } from "react";
import axios from "axios";

// Components
import LoaderFullScreen from "../Utility/LoaderFullScreen";

const Articles = () => {
  // Sates
  const [isLoading, setIsLoading] = useState(false);
  const [author, setAuthor] = useState("");
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);

  //   Article Handle to Submit new article
  const articleHandle = async () => {
    const formData = new FormData();
    formData.append("picture", picture);
    formData.append("author", author);
    formData.append("title", title);
    formData.append("text", text);
    formData.append("tags", tags);
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://itrsq.herokuapp.com/article/create",
        formData
      );
      if (response.data._id) {
        alert("New Article Succesfully created");
        window.location.reload(false);
        setIsLoading(false);
      } else {
        alert("There has been a problem");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      alert("There has been a problem");
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <LoaderFullScreen />
  ) : (
    <div className="admin__articles">
      <div className="admin__form">
        <h1 className="txt-header-small-white">Create New Article</h1>
        <label>
          Author
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </label>
        <label>
          Picture{" "}
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => {
              setPicture(e.target.files[0]);
            }}
          />
        </label>
        <label>
          Title
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          Text
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
            rows="15"
            cols="50"
          />
        </label>
        <label>
          Tags
          <input
            type="text"
            onChange={(e) => setTags(e.target.value.split(","))}
            value={tags.toString()}
          />
        </label>
        <button className="btn-classic-blue" onClick={() => articleHandle()}>
          Create New Article
        </button>
      </div>
    </div>
  );
};

export default Articles;
