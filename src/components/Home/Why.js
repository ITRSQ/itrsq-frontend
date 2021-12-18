const Why = ({ id }) => {
  return (
    <div className="home__why" id={id}>
      <div className="home__why__container">
        {" "}
        <h1 className="txt-header-large-white">Why choose our service ?</h1>
        <div className="card-container2">
          <div data-aos="fade-up">
            <h2 className="txt-header-small-white">Your website</h2>
            <p className="txt-description-small-white">
              Pages built on site builders stay on site builders (the same site
              builder). There is no easy way to transfer them out because the
              source code of your page is translated into metadata. This means
              if you decide you want to change to a different hosting platform,
              you will have to rebuild your website from scratch.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay={300}>
            <h2 className="txt-header-small-white">Less monthly costs</h2>
            <p className="txt-description-small-white">
              If you don’t want to provide free advertising for the service you
              built your site on, or you don’t want to have any restrictions
              over what you can do on your own site, you’ll have to pay extra
              for it, and the price will be typically higher than it would be
              for normal hosting.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay={600}>
            <h2 className="txt-header-small-white">Optimisation </h2>
            <p className="txt-description-small-white">
              Personalised code is nearly always more efficient. The source code
              of ready- made websites is not minimalistic by any means since it
              must be very adaptable and also hosts mandatory advertisement
              information. This increases the chance of your site failing on a
              technical level.
            </p>
          </div>
        </div>
        <div className="card-container2">
          <div data-aos="fade-up" data-aos-delay={300}>
            <h2 className="txt-header-small-white">Security</h2>
            <p className="txt-description-small-white">
              Now ready-made websites aren’t by any means weak in terms of
              security. However, since they’re based on a same model everytime,
              they’re an attractive target for hackers. It’s much more worth
              hacking a model that has been using countless of times rather than
              a single website. Furthermore, security can be adapted to your
              needs and our standards and the code behind your website will only
              be accessible to you and those you wish to authorise.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay={600}>
            <h2 className="txt-header-small-white">Originality</h2>
            <p className="txt-description-small-white">
              Have you ever noticed that some websites have a lot in common?
              That’s the problem of template-based design. There’s nothing wrong
              with templates if you’re properly customizing them and turning
              them into something completely original, but huge numbers of
              people just seem to be too lazy for that. The result of that lack
              of effort is going to be less customers for you (or your client)
              because they don’t see your site as offering anything unique. This
              gives you the custom edge, no one else is going to have the same
              layout to you or the same content.
            </p>
          </div>
        </div>
        <h3 className="txt-description-large-white">
          Building a website is an investment. While the initial cost is higher
          than using a free template, your product will be more secure,
          optimised, original and can be easily upgraded in the long-run. All of
          the famous websites that you use everyday (Facebook, Airbnb,
          TripAdvisor, Instagram, Reddit, LinkedIn and thousands more) were
          built that way because they needed a custom product with a vision. If
          that is what you want for yourself or your business, send us a quote
          and we’ll be happy to discuss your project with you.
        </h3>
      </div>
    </div>
  );
};
export default Why;
