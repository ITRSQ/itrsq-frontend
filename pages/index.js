// Imports
import { useEffect } from "react";
import Rellax from "rellax";
import Head from "next/head";

// Components
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Why from "../components/Home/Why";
import Footer from "../components/Footer";
import Testimonials from "../components/Home/Testimonials";
import SubWebsite from "../components/Home/SubWebsite.js";
import SubTools from "../components/Home/SubTools.js";
import SubSupport from "../components/Home/SubSupport.js";

export default function Home() {
  useEffect(() => {
    new Rellax(".rellax", {
      speed: -10,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return (
    <div className="core-page">
      <Head>
        <title>ITRSQ - Home</title>
        <meta property="og:title" content="ITRSQ - Home" key="title" />
      </Head>
      <Hero
        id="hero"
        onArrow={() =>
          document
            .getElementById("services")
            .scrollIntoView({ behavior: "smooth" })
        }
      />

      <Services id="services" />
      <SubWebsite />
      <Why id="why" />
      <SubTools />
      <SubSupport />
      {/* <Testimonials /> */}

      <Footer />
    </div>
  );
}
