import React from "react";
import { Container } from "../common/Container";
import logo from "../../assets/img/nav/logo.png";
import { CgMenu } from "react-icons/cg";

export const Nav = () => {
  return (
    <nav className="bg-amber-300  w-screen fixed top-0 bg-opacity-30">
      <Container className="flex justify-between text-center">
        <div className="flex flex-col items-center sm:flex-row">
          <img src={logo} className="w-20" alt="magma-logo" />
          <h1 className="p-1 font-medium text-xs font-sans">
            MAGMA CONSTRUCCIONES
          </h1>
        </div>
        <div className="flex items-center">
          <CgMenu className="text-4xl sm:hidden" />
        </div>
        <div className="hidden sm:flex sm:items-center">
          <span className="pb-1 px-3 mx-2 hover:border-b-2 hover:border-amber-300 font-light">
            INICIO
          </span>
          <span className="pb-1 px-3 mx-2 hover:border-b-2 hover:border-amber-300 font-light">
            NOSOTROS
          </span>
          <span className="pb-1 px-3 mx-2 hover:border-b-2 hover:border-amber-300 font-light">
            CONTACTO
          </span>
        </div>
      </Container>
    </nav>
  );
};
