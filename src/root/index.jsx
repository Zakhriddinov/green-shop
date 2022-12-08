import React from "react";
import { Route, Routes } from "react-router-dom";
import route from "../utils/route";

const Root = () => {
  return (
    <>
      <Routes>
        {route.map(({ id, path, element }) => (
          <Route path={path} key={id} element={element} />
        ))}
      </Routes>
    </>
  );
};

export default Root;
