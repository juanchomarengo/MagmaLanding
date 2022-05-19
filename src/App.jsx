import React from "react";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Cards } from "./components/Cards/Cards";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import "./index.css";

export const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <AboutUs />
      {/* <Cards /> */}
    </>
  );
};
