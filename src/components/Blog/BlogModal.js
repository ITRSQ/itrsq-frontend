import image from "../../assets/img/white-background.png";

const BlogModal = ({ setModal, modalInfo }) => {
  console.log(modalInfo);

  function NewlineText(props) {
    const URL_REGEX =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    const text = props.text;
    const newText = text.split("<br>").map((str) =>
      URL_REGEX.test(str) ? (
        <a href={str} className="blogModal__links">
          {str}{" "}
        </a>
      ) : (
        <p className="blogModal__txt txt-description-medium-white">{str}</p>
      )
    );
    return newText;
  }
  return (
    <div className="blogModal">
      <i class="far fa-times-circle blog-x" onClick={() => setModal(false)}></i>
      <h1 className="txt-header-large-white">{modalInfo.title}</h1>
      <h2 className="blogModal__author txt-description-large-white">
        by {modalInfo.author}
      </h2>
      <img src={modalInfo.picture} alt={modalInfo.picture} />
      <div className="blogModal__txtContainer">
        <NewlineText text={modalInfo.text} />
      </div>
    </div>
  );
};
export default BlogModal;
