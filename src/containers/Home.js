// Components
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Why from "../components/Home/Why";

const Home = () => {
  return (
    <div className="container_main">
      <Hero />
      <Services />
      <Why />
    </div>
  );
};

export default Home;
