import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MetaData from "../more/MetaData";
import "./About.css";

const About = () => {
  return (
    <>
      <MetaData title={"About Us"} />
      <Header />
      <section className="about" id="about">
        <h1 className="heading">
          <span> about </span> us
        </h1>

        <div className="row">
          <div className="video-container">
            <img
              src="https://images.unsplash.com/photo-1535826625387-e00f6de42e9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbiUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <h3>all talents meet in Creatives.</h3>
          </div>

          <div className="content">
            <h3>why choose us?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              cumque sit nemo pariatur corporis perspiciatis aspernatur a ullam
              repudiandae autem asperiores quibusdam omnis commodi alias
              repellat illum, unde optio temporibus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium ea est commodi incidunt magni quia molestias
              perspiciatis, unde repudiandae quidem.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
