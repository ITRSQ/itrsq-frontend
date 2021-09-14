import image from "../../assets/img/white-background.png";

const BlogModal = ({ setModal, modalInfo }) => {
  return (
    <div className="blogModal">
      <i class="far fa-times-circle blog-x" onClick={() => setModal(false)}></i>
      <h1 className="txt-header-large-white">{modalInfo}</h1>
      <img src={image} alt={image} />
      <p className="txt-description-small-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto impedit
        perspiciatis, officiis aspernatur hic natus dolorum. Doloribus ex vel,
        dolore optio eos voluptates adipisci magnam corporis at facere sequi
        quasi nobis quia amet explicabo animi expedita. Reiciendis, earum
        deserunt aliquam soluta doloribus iusto quam laboriosam, et impedit
        dolor aperiam. Doloribus nesciunt nulla, sed tempore eos porro libero,
        modi accusantium deleniti beatae repudiandae adipisci. Cumque,
        consequatur impedit. Iusto error quia corporis molestiae, omnis sunt
        voluptatem nesciunt officia aspernatur, expedita illum vel vero enim
        modi perferendis quidem magnam aliquid aperiam atque ea. Sequi error
        quas eius laborum? Eius, doloribus delectus beatae voluptates pariatur
        magni error reprehenderit rem blanditiis earum minima excepturi neque
        amet, provident, alias porro perspiciatis possimus eligendi. Aliquam
        iure eum, ab ut libero dolores enim magni tempore qui quod molestiae vel
        quo voluptas hic neque fugit aut aperiam sed itaque optio mollitia totam
        repellendus error! Commodi sapiente quis esse quos facilis sed
        blanditiis quaerat nihil reprehenderit ipsam nulla quam nisi aperiam
        qui, fugiat accusamus, officiis repudiandae obcaecati veritatis quisquam
        quod nam assumenda inventore placeat! Numquam, voluptates impedit natus
        aperiam accusantium incidunt id, voluptate esse recusandae deserunt,
        eius eveniet eum tempora quas quaerat! Ratione et illo eveniet fugiat
        iure alias? Explicabo.
      </p>
    </div>
  );
};
export default BlogModal;
