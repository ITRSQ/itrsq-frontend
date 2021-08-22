const Services = ({ id }) => {
  return (
    <div className="home__services" id={id}>
      <div>
        <h1 className="txt-header-medium-dynamic" data-aos="fade-right">
          Website Design
        </h1>
        <p className="txt-description-large-black" data-aos="fade-right">
          If you aren’t already working with a designer, our team will design
          the identity and components of your website. We’ll always make sure
          that what we do corresponds to your vision by communicating with you
          throughout the design process if you wish to be involved. Your final
          product will be a <span>beautiful</span> , <span>modern</span> and{" "}
          <span>responsive</span> website that you’ll be proud to share with the
          world.
        </p>
      </div>
      <div className="container-right">
        <h1 className="txt-header-medium-dynamic" data-aos="fade-left">
          Website Development
        </h1>
        <p className="txt-description-large-black" data-aos="fade-left">
          Once the design and concept are validated, we’ll of course build your
          website. Depending on your needs, we’ll code a{" "}
          <span>complete solution</span> from scratch (frontend, backend &
          database).
        </p>
      </div>
      <div>
        <h1 className="txt-header-medium-dynamic" data-aos="fade-right">
          IT support
        </h1>
        <p className="txt-description-large-black" data-aos="fade-right">
          We’ll stay <span>by your side</span> throughout the creation process
          and much further down the line. If you change your mind about
          something, want your website redesigned or updated, you can count on
          our assistance.
        </p>
      </div>
    </div>
  );
};

export default Services;
