import React from "react";
import axios from "axios";
import Header from "../header/Header";
import MetaData from "../more/MetaData";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [looading, setLooading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      return toast.error("Please fill email, subject and message");
    }
    try {
      setLooading(true);
      const { data } = await axios.post(`api/v1/contact/form`, {
        name,
        email,
        subject,
        message,
      });
      setLooading(false);
      toast.success(data.message);
      document.getElementById("myForm").reset();
    } catch (err) {
      setLooading(false);
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };
  return (
    <>
      <MetaData title={"Contact Us"} />
      <Header />
      <section className="contact" id="contact">
        <h1 className="heading">
          <span> contact </span> us
        </h1>

        <div className="row">
          <form action="" id="myForm" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Your Name..."
              className="box"
              name="email"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email..."
              className="box"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Your Number..."
              className="box"
              name="name"
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              name="text"
              className="box"
              placeholder="Enter your message..."
              onChange={(e) => setMessage(e.target.value)}
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input
              type="submit"
              disabled={looading}
              value={looading ? "Sending..." : "Submit"}
              className="btn"
            />
          </form>
        </div>
      </section>
      <ToastContainer position="top-center" limit={1} />
    </>
  );
};

export default Contact;
