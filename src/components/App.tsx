import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import { PrivateRoute } from "./AuthRoutes/PrivateRoutes";
import { PublicRoute } from "./AuthRoutes/PublicRoutes";
import { Layout } from "./Layout/Layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="" element={<PublicRoute />}>
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route path="" element={<PrivateRoute />}>
          <Route path="news" element={<NewsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
