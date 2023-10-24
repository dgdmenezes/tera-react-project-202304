import React from "react";
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import UserBlog from "./components/pages/UserBlog";
import PostForm from "./components/pages/PostForm";

import { GlobalContext } from "./contexts/GlobalContext"; //provider

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";

function App() {
  const [currentUser, setCurrenUser] = React.useState("");
  const contextValues = { currentUser, setCurrenUser };

  return (
    <GlobalContext.Provider value={contextValues}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home currentUser={currentUser} setCurrenUser={setCurrenUser} />
            }
          />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserBlog />} />
          <Route path="/users/:userId/post" element={<PostForm />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
