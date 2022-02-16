// Components
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Why from "../components/Home/Why";
import Footer from "../components/Footer";
// import StickyMenu from "../components/Navigation/StickyMenu";
import WhatsApp from "../components/Communication/WhatsApp";
import Testimonials from "../components/Home/Testimonials";

// Meta
import Metadecorator from "../components/Utility/MetaDecorators";
import tags from "../assets/json/meta_tags/home.json";

const Home = () => {
  return (
    <div className="bg-gradient-orange">
      <Metadecorator
        title={tags.pagetitle}
        description={tags.pagedescription}
        tags={tags.tags}
      />
      <WhatsApp />
      {/* <StickyMenu
        anchor1="Home"
        anchor1Id="hero"
        anchor2="Services"
        anchor2Id="services"
        anchor3="Why us ?"
        anchor3Id="why"
      /> */}
      <Hero
        id="hero"
        onArrow={() =>
          document
            .getElementById("services")
            .scrollIntoView({ behavior: "smooth" })
        }
      />
      <Testimonials />

      <Services id="services" />

      <Why id="why" />
      <Footer />
    </div>
  );
};

export default Home;
