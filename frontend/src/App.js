import Home from "./components/home/Home";
import LoginSignup from "./components/authentication/LoginSignup";
import Profile from "./components/user/Profile";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import WebFont from "webfontloader";
import ProtectedRoute from "./route/ProtectedRoute";
import store from "./store";
import ForgotPassword from "./components/user/ForgotPassword";
import EditProfile from "./components/user/EditProfile";
import ResetPassword from "./components/user/ResetPassword";
import UpdatePassword from "./components/user/UpdatePassword";
import { loadUser } from "./actions/userAction";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginSignup} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <ProtectedRoute exact path="/me/update" component={UpdatePassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />
        <Route exact path="/password/forgot" component={ForgotPassword} />
        <ProtectedRoute exact path="/me" component={Profile} />
        <ProtectedRoute exact path="/me/update/info" component={EditProfile} />
      </Switch>
    </Router>
  );
}

export default App;
