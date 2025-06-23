import React from "react";
import Navigation_menu from "../Navigation_menu";
import Footer from "../Footer";

const Layout2 = (props) => {
  return (
    <>
      <Navigation_menu />

      {props.children}

      <div>
        <h2>Below is the footer section</h2>
      </div>
      <Footer />
    </>
  );
};

export default Layout2;
