const Services = ({ id }) => {
  return (
    <div className="container-full-white" id={id}>
      <div className="card-container-services">
        <div>
          <h1 className="txt-header-medium-dynamic" data-aos="fade-up">
            Website Design
          </h1>
          <p className="txt-description-large-black" data-aos="fade-up">
            If you aren’t already working with a designer, our team will design
            the identity and components of your website. We’ll always make sure
            that what we do corresponds to your vision by communicating with you
            throughout the design process. Your final product will be a 
            <span> beautiful</span>, <span>modern</span> and{" "}
            <span>responsive</span> website that you’ll be proud to share with
            the world.
          </p>
        </div>
        <div>
          <h1 className="txt-header-medium-dynamic" data-aos="fade-up" data-aos-delay={300}>
            Website Development
          </h1>
          <p className="txt-description-large-black" data-aos="fade-up" data-aos-delay={300}>
            Once the design and concept are validated, we’ll of course build
            your website. Depending on your needs, we’ll code a{" "}
            <span>complete solution</span> from scratch (frontend, backend &
            database). Our <a href="https://www.itrsq.com/website" target="_blank">Website Development Packages </a> cover basic website updates, custom development features and complete website
            development.
          </p>
        </div>
        <div>
          <h1 className="txt-header-medium-dynamic" data-aos="fade-up" data-aos-delay={600}>
            IT Support
          </h1>
          <p className="txt-description-large-black" data-aos="fade-up" data-aos-delay={600}>
            We’ll stay <span>by your side</span> throughout the creation process
            and much further down the line. If you change your mind about
            something, want your website redesigned or updated, you can count on
            our assistance. Head to the <a href="https://www.itrsq.com/website" target="_blank">Website </a> 
            page to see our maintenance packages, and if it's something else you're after hit the 'contact us' button for a custom website development quote.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
