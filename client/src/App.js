import "./app.css";
import Navbar from "./Context/Parent/Components/Navbar/Navbar";
import Home from "./Context/Parent/pages/home/Home";
import Auth from "./Context/Parent/pages/auth/Auth";
import { Routes, Route } from "react-router-dom";
import Context from "./context/Context";
import Message from "./Context/Parent/Components/Message/Message";
import NotFound from "./components/NotFound/NotFound";
import { useContext } from "react";
import { ParentAuthContext } from "./Auth/AAuthContex";
// import Nav from "./components/Nav/Nav";

function App() {
  const { parent } = useContext(ParentAuthContext);
  return (
    <div className="app">
      {parent ? <Navbar /> : <Navbar />}
      <Routes>
        <Route index element={parent ? <Context /> : <Home />} />
        {/* // <Route path="Home" element={<Home />} /> */}
        <Route path="Auth" element={<Auth />} />
        <Route path="Message" element={<Message />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
