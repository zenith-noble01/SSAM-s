// import First from "./components/first/First";
// import Members from "./components/members/Members";
// import Nav from "./components/Nav/Nav";
// import AboutUs from "./components/aboutus/AboutUs"
// import Contact from "./components/contact/Contact";
import "./app.css";
// import Auth from "./Context/Parent/pages/auth/Auth";
import Slide from "./Context/Parent/Components/Slides/Slide";

function App() {
  return (
    <div className="app">
      <Slide />
      {/* <First />
      <div className="padding__divs">
        <AboutUs />
        <Members />
        <Contact />
      </div> */}
    </div>
  );
}

export default App;
