import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import navbar from "../utils/navbar";

const Root = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ id, path, element }) => (
            <Route path={path} key={id} element={element} />
          ))}
        </Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default Root;
