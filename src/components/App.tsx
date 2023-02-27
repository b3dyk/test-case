import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
    </Routes>
  );
};

export default App;
