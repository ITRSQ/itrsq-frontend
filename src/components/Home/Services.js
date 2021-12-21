const Services = ({ id }) => {
  return (
    <div className="container-full-white" id={id}>
      <div className="home__services">
        <div>
          <h1 className="txt-header-medium-dynamic" data-aos="fade-right">
            Website Design
          </h1>
          <p className="txt-description-large-black" data-aos="fade-up">
            If you aren’t already working with a designer, our team will design
            the identity and components of your website. We’ll always make sure
            that what we do corresponds to your vision by communicating with you
            throughout the design process. Your final product will be a
            <span>beautiful</span>, <span>modern</span> and{" "}
            <span>responsive</span> website that you’ll be proud to share with
            the world.
          </p>
        </div>
        <div className="container-right">
          <h1 className="txt-header-medium-dynamic" data-aos="fade-left">
            Website Development
          </h1>
          <p className="txt-description-large-black" data-aos="fade-left">
            Once the design and concept are validated, we’ll of course build
            your website. Depending on your needs, we’ll code a{" "}
            <span>complete solution</span> from scratch (frontend, backend &
            database).
          </p>
        </div>
        <div>
          <h1 className="txt-header-medium-dynamic" data-aos="fade-right">
            IT Support
          </h1>
          <p className="txt-description-large-black" data-aos="fade-right">
            We’ll stay <span>by your side</span> throughout the creation process
            and much further down the line. If you change your mind about
            something, want your website redesigned or updated, you can count on
            our assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
