import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">products</a>
            <a href="#">review</a>
            <a href="#">contact</a>
          </div>

          <div className="box">
            <h3>extra links</h3>
            <a href="#">my account</a>
            <a href="#">my favourites</a>
            <a href="#">my specials</a>
          </div>

          <div className="box">
            <h3>locations</h3>
            <a href="#">Nairobi</a>
            <a href="#">Kisumu</a>
            <a href="#">Nakuru</a>
            <a href="#">Mombosa</a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#">+254-712-012-113</a>
            <a href="#">samuelndewa2018@gmail.com</a>
            <a href="#">Nairobi, Kenya</a>
          </div>
        </div>

        <div className="credit">
          created by <span> Bramuels Githinji </span> | all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
