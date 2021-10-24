// Packages
import { useState } from "react";

// Components
import Articles from "../../components/Admin/Articles";
import Footer from "../../components/Footer";

const Admin = () => {
  const [picker, setPicker] = useState("articles");
  return (
    <div className="bg-gradient-orange admin">
      <div className="admin__container">
        <div className="admin__picker">
          <h1 className="txt-header-medium-white blog__buttons">Articles</h1>
        </div>
        <div className="admin__content">
          {picker === "articles" && <Articles />}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Admin;
