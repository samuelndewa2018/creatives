import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Talent from "../talent/Talent";
import MetaData from "../more/MetaData";
import "./Home.css";

const Home = () => {
  return (
    <>
      <MetaData title={"Home"} />
      <>
        <Header />
        <section className="home" id="home">
          <div className="content">
            <h3>Creatives Buzz</h3>
            <span> Where all talents meets</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              laborum ut minus corrupti dolorum dolore assumenda iste voluptate
              dolorem pariatur.
            </p>
            <a href="#" className="btn">
              view talents
            </a>
          </div>
        </section>
        <Talent />
        <Footer />
      </>
    </>
  );
};

export default Home;
