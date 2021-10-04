import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import NewsFeed from "./Components/NewsFeed/NewsFeed";
import Course from "./Components/Course/Course";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/newsFeed">
            <NewsFeed></NewsFeed>
          </Route>
          <Route path="/Course">
            <Course></Course>
          </Route>
          <Route path="/contactUs">
            <ContactUs></ContactUs>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
