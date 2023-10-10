import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import UserBlog from "./components/pages/UserBlog";
import PostForm from "./components/pages/PostForm";

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserBlog />} />
        <Route path="/users/:userId/post" element={<PostForm />} />
        <Route
          path="*"
          element={
            <img
              src="https://httpstatusdogs.com/img/404.jpg"
              alt="404 Not Found "
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
