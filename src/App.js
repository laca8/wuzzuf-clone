import "./App.css";
import Home from "./components/Header/Home";
import Navbar from "./components/Header/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Footer from "./components/Header/Footer";
import ProfileCreate from "./components/Profiles/ProfileCreate";
import Explore from "./components/Explore/Explore";
import Profile from "./components/Profiles/Profile";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/createProfile/:page" component={ProfileCreate} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/profile" component={Profile} />
      <Footer />
    </Router>
  );
};

export default App;
