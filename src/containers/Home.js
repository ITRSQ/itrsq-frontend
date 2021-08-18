// Components
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Why from "../components/Home/Why";

const Home = () => {
  return (
    <div>
      <Hero
        onArrow={() =>
          document
            .getElementById("services")
            .scrollIntoView({ behavior: "smooth" })
        }
      />
      <Services id="services" />
      <Why />
    </div>
  );
};

export default Home;
