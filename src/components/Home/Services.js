const Services = ({ id }) => {
  return (
    <div className="container-full-white" id={id}>
      <div className="home__services">
        <div>
          <h1 className="txt-header-medium-dynamic" data-aos="fade-right">
            Website Design
          </h1>
          <p className="txt-description-large-black" data-aos="fade-up">
          We can design the components of your website if you don't already have a designer. Throughout the design process, we'll communicate carefully with you so that the final product is pleasing to the eye, informative, and valuable to your audience. /We'll ensure what we do corresponds to what you want by communicating with you throughout the entire process. Your final product will be beautiful, modern, and functional.
          </p>
        </div>
        <div className="container-right">
          <h1 className="txt-header-medium-dynamic" data-aos="fade-left">
            Website Development
          </h1>
          <p className="txt-description-large-black" data-aos="fade-left">
          Once the design and concepts are validated, we begin to build/ building your website. To cater to your every need, we code a complete solution from scratch (frontend, backend, and database).
          </p>
        </div>
        <div>
          <h1 className="txt-header-medium-dynamic" data-aos="fade-right">
            IT Support
          </h1>
          <p className="txt-description-large-black" data-aos="fade-right">
          We will stay by your side throughout the process and beyond. If you change your mind about something – whether it be new designs or updates, you can count on us.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
