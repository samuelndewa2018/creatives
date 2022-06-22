import Footer from "../footer/Footer";
import Header from "../header/Header";
import MetaData from "../more/MetaData";
import React, { useEffect } from "react";
import { logout } from "../../actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Profile.css";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logoutUser = async (e) => {
    e.preventDefault();
    dispatch(logout());
    toast.success("Logout Successfully");
    history.push("/");
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);

  return (
    <>
      <Header />
      <div>
        <MetaData title={`${user.name}'s profile`} />

        <h1 className="profileHeader">My Profile</h1>

        <div className="profileSubContainer">
          <div className="profileContainer">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={user.avatar.url}
                alt={user.name}
                className="profile__img"
              />
              <Link to="/me/update/info" className="edit__profile">
                Edit Profile
              </Link>
            </div>
          </div>
          <div className="information">
            <div className="middle">
              <div className="info">
                <h4
                  style={{
                    padding: "0px 5px",
                  }}
                >
                  Full Name:
                </h4>
                <p>{user.name}</p>
              </div>
              <div className="info">
                <h4
                  style={{
                    padding: "0px 5px",
                  }}
                >
                  Email:
                </h4>
                <p>{user.email}</p>
              </div>
              <div className="info">
                <h4
                  style={{
                    padding: "0px 5px",
                  }}
                >
                  Joined On:
                </h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div className="change__info">
                <Link className="settings" onClick={logoutUser}>
                  <p> Log Out</p>
                  <p>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      class="bi bi-box-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                      />
                    </svg>
                  </p>
                </Link>
                <Link to="/me/update" className="settings">
                  Change Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Profile;
