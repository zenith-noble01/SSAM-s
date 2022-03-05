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
import Notifications from "./Context/Parent/Components/Notifications/Notifications";

function App() {
  const { user } = useContext(ParentAuthContext);
  // const user = true
  return (
    <div className="app">
      {user ? <Navbar user={user} /> : null}
      <Routes>
        <Route index element={user ? <Home /> : <Context />} />
        <Route path="Auth" element={user ? <Home /> : <Auth />} />
        <Route path="Message" element={user ? <Message /> : <Auth />} />
        <Route path="Slides" element={user ? <Home /> : <Slide />} />
        <Route path="News" element={user ? <News /> : <Context />} />
        <Route
          path="Notifications"
          element={user ? <Notifications /> : <Context />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
