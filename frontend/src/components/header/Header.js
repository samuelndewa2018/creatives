import React from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { logout } from "../../actions/userAction";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  return (
    <>
      <header>
        <input type="checkbox" name="" id="toggler" />
        <label for="toggler" className="fas fa-bars">
          {" "}
          <DehazeIcon style={{ fontSize: "3rem" }} />
        </label>

        <Link to="/" href="#" className="logo">
          Creatives<span>.</span>
        </Link>

        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/">Talents</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
        <div className="greatings">
          <p>Hello, {user?.name || "Guest"}!</p>
        </div>

        <div className="icons">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-heart pxz__20 black"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </Link>
          <Link to="/me">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-person pxz__20 black"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
