import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Error404 from "./components/Error404";
import MaleUsers from "./components/MaleUsers";
import RandomUsers from "./components/RandomUsers";
import FemaleUsers from "./components/FemaleUsers";
import User from "./components/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<User />}>
          <Route path="/users" element={<RandomUsers />} />
          <Route path="male" element={<MaleUsers />} />
          <Route path="female" element={<FemaleUsers />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
