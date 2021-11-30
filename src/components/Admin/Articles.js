// Packages
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import LoaderFullScreen from "../Utility/LoaderFullScreen";

const Articles = () => {
  // Sates
  const [isLoading, setIsLoading] = useState(true);
  const [author, setAuthor] = useState("");
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);
  const [authorUpdate, setAuthorUpdate] = useState("");
  const [pictureUpdate, setPictureUpdate] = useState("");
  const [titleUpdate, setTitleUpdate] = useState("");
  const [textUpdate, setTextUpdate] = useState("");
  const [tagsUpdate, setTagsUpdate] = useState([]);
  const [idUpdate, setIdUpdate] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://itrsq.herokuapp.com/articles`
        );

        setData(response.data);
        setPictureUpdate(response.data[0].picture);
        setAuthorUpdate(response.data[0].author);
        setTitleUpdate(response.data[0].title);
        setTagsUpdate(response.data[0].tags.toString());
        setTextUpdate(response.data[0].text);
        setIdUpdate(response.data[0]._id);
        console.log(response.data[0].tags);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(true);
      }
    };
    fetchData();
  }, []);

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

  //   Article Handle to Update article
  const articleUpdateHandle = async () => {
    const formData = new FormData();
    formData.append("picture", pictureUpdate);
    formData.append("author", authorUpdate);
    formData.append("title", titleUpdate);
    formData.append("text", textUpdate);
    formData.append("tags", tagsUpdate);
    formData.append("id", idUpdate);
    try {
      setIsLoading(true);
      const response = await axios.put(
        "https://itrsq.herokuapp.com/article/update",
        formData
      );
      if (response.data) {
        alert("Article Successfully updated!");
        window.location.reload(false);
        setIsLoading(false);
      } else {
        alert("There has been a problem updating this article");
        setIsLoading(false);
      }
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  // Article Handle to delete Article
  const deleteHandle = async () => {
    const formData = new FormData();
    formData.append("id", idUpdate);
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://itrsq.herokuapp.com/article/delete",
        formData
      );

      alert(response.data);
      window.location.reload(false);
      setIsLoading(false);
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  //  Article Handle to change selected Article
  const updateSelectHandle = (props) => {
    console.log(props);
    for (let i = 0; i < data.length; i++) {
      if (data[i]._id === props) {
        setAuthorUpdate(data[i].author);
        setTitleUpdate(data[i].title);
        setTagsUpdate(data[i].tags.toString());
        setTextUpdate(data[i].text);
        setPictureUpdate(data[i].picture);
        setIdUpdate(data[i]._id);
      }
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
      <div className="admin__form">
        <h1 className="txt-header-small-white">Update Article</h1>
        <label>
          Select Article
          <select
            name="articles"
            onChange={(e) => updateSelectHandle(e.target.value)}
          >
            {data.map((article) => {
              return <option value={article._id}>{article.title}</option>;
            })}
          </select>
        </label>
        <label>
          Author
          <input
            type="text"
            onChange={(e) => setAuthorUpdate(e.target.value)}
            value={authorUpdate}
          />
        </label>
        <label>
          Current Picture
          <img src={pictureUpdate} alt="" />
        </label>
        <label>
          Change Picture{" "}
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => {
              setPictureUpdate(e.target.files[0]);
            }}
          />
        </label>
        <label>
          Title
          <input
            type="text"
            onChange={(e) => setTitleUpdate(e.target.value)}
            value={titleUpdate}
          />
        </label>
        <label>
          Text
          <textarea
            onChange={(e) => setTextUpdate(e.target.value)}
            value={textUpdate}
            rows="15"
            cols="50"
          />
        </label>
        <label>
          Tags
          <input
            type="text"
            onChange={(e) => setTagsUpdate(e.target.value.split(","))}
            value={tagsUpdate.toString()}
          />
        </label>
        <button
          className="btn-classic-blue"
          onClick={() => articleUpdateHandle()}
        >
          Update Article
        </button>
        <button className="btn-classic-red" onClick={() => deleteHandle()}>
          Delete Article
        </button>
      </div>
    </div>
  );
};

export default Articles;
