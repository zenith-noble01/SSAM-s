import "./app.css";
import Navbar from "./Context/Parent/Components/Navbar/Navbar";
import Home from "./Context/Parent/pages/home/Home";
import Auth from "./Context/Parent/pages/auth/Auth";
import { Routes, Route } from "react-router-dom";
import Context from "./context/Context";
import Message from "./Context/Parent/Components/Message/Message";
import NotFound from "./components/NotFound/NotFound";
import { useEffect, useState } from "react";
import Slide from "./Context/Parent/Components/Slides/Slide";
import News from "./Context/Parent/Components/News/News";
// import { useContext } from "react";
// import { ParentAuthContext } from "./Auth/AAuthContex";
// import Nav from "./components/Nav/Nav";

function App() {
  // const { parent } = useContext(ParentAuthContext);
  const [parent, setParent] = useState(null);

  useEffect(() => {
    const getParent = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setParent(resObject.parent);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getParent();
  }, []);

  return (
    <div className="app">
      {parent ? <Navbar parent={parent} /> : null}
      <Routes>
        <Route index element={parent ? <Context /> : <Context />} />
        <Route path="Auth" element={parent ? <Home /> : <Auth />} />
        <Route path="Message" element={<Message />} />
        <Route path="Slides" element={<Slide />} />
        <Route path="News" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
