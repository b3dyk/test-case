import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import { Layout } from "./Layout/Layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route path="news" element={<NewsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
