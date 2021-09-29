// Packages
import { useHistory } from "react-router-dom";

// Components
import Footer from "../../components/Footer";

const Projects = () => {
  const history = useHistory();
  return (
    <div className="projects bg-gradient-orange">
      <div className="projects__container">
        <h1 className="txt-header-medium-white">Projects</h1>
        <div className="projects__preview__container">
          <div className="projects__preview__none">
            <h1 className="txt-description-large-white">
              You have no projects yet
            </h1>
            <button
              className="btn-classic-blue"
              onClick={() => history.push("/contact")}
            >
              Get your free quote
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
