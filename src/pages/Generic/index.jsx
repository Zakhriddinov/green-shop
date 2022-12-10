import React from "react";
import { useLocation } from "react-router-dom";

const Generic = () => {
  const { pathname } = useLocation();
  return <div>{pathname}</div>;
};

export default Generic;
