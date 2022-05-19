import React from "react";
import Building from "../../assets/img/header/building.png";
import { Container } from "../common/Container";

export const Header = () => {
  return (
    <Container className="flex items-center flex-col pt-16 md:pt-10 pb-4 md:flex-row-reverse">
      <div className="flex justify-center">
        <img src={Building} alt="planos-edificios" className="sm:max-w-lg" />
      </div>
      <div className="lg:basis-1/2 flex flex-col justify-center max-w-xl ">
        <h3 className="text-2xl font-bold text-center">
          Aqui es donde tu proyecto comienza a ser realidad
        </h3>
        <p className="font-light p-1">
          Todo proyecto comienza con una idea, esta es la primera etapa del
          proceso de construcción. Estas a un paso de comenzar a construir tu
          proyecto.
        </p>
        <div className="flex justify-center">
          <button className="py-2 px-2 mt-2 bg-amber-300 bg-opacity-80 rounded-xl w-40 text-center shadow-lg shadow-slate-300 cursor-pointer hover:bg-opacity-100 transition-all font-medium">
            Escribenos Ahora
          </button>
        </div>
      </div>
    </Container>
  );
};
