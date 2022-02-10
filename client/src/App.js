import "./app.css";
import Navbar from "./Context/Parent/Components/Navbar/Navbar";
import Home from "./Context/Parent/pages/home/Home";
import Auth from "./Context/Parent/pages/auth/Auth";
import { Routes, Route } from "react-router-dom";
import Context from "./context/Context";
import Message from "./Context/Parent/Components/Message/Message";
import NotFound from "./components/NotFound/NotFound";
import Slide from "./Context/Parent/Components/Slides/Slide";
import News from "./Context/Parent/Components/News/News";
import { useContext } from "react";
import { ParentAuthContext } from "./Auth/AAuthContex";

function App() {
  const { user } = useContext(ParentAuthContext);
  console.log(user);
  return (
    <div className="app">
      {user ? <Navbar user={user} /> : null}
      <Routes>
        <Route index element={user ? <Home /> : <Context />} />
        <Route path="Auth" element={user ? <Home /> : <Auth />} />
        <Route path="Message" element={<Message />} />
        <Route path="Slides" element={<Slide />} />
        <Route path="News" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
