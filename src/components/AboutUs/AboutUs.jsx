import { Container } from "../common/Container";
import img1 from "../../assets/img/aboutUs/img1.jpg";
import img2 from "../../assets/img/aboutUs/img2.jpg";
import img3 from "../../assets/img/aboutUs/img3.jpg";
import React from "react";

export const AboutUs = () => {
  return (
    <div className="bg-gray-300 flex justify-center">
      <Container className="flex flex-col md:flex-row items-center m-4 md:mt-0">
        <div className="flex md:self-center relative pt-3 md:mr-8">
          <div
            className="w-[130px] h-[130px] md:w-[200px] md:h-[200px] md:rounded-none bg-cover bg-center rounded-full border-2 border-gray-600"
            style={{
              backgroundImage: `url(${img2})`,
            }}
          />
          <div
            className="w-[130px] h-[130px] md:w-[200px] md:h-[200px] md:rounded-none md:left-24 md:pr-5 bg-cover bg-center rounded-full border-2 border-gray-600 left-16 absolute"
            style={{
              backgroundImage: `url(${img1})`,
            }}
          />
          <div
            className="w-[130px] h-[130px] md:w-[200px] md:h-[200px] md:rounded-none bg-cover bg-center rounded-full border-2 border-gray-600"
            style={{
              backgroundImage: `url(${img3})`,
            }}
          />
        </div>
        <div className="flex flex-col items-center m-3 md:max-w-lg">
          <h3 className="font-semibold pb-2 text-2xl">Nuestro compromiso</h3>
          <p className="font-light">
            Desde <span className="font-normal"> Magma construcciones </span>
            estamos comprometidos con la calidad de nuestros productos y
            servicios. Priorizamos la atencion al cliente y la calidad de
            nuestros servicios, por eso te ofrecemos una atencion personalizada
            y profesional. Nuestro compromiso no finaliza en la entrega del
            proyecto, por eso, nosotros tenemos un servicio post venta, para que
            tengas la tranquilidad de que Magma esta con vos y tu proyecto.
          </p>
        </div>
      </Container>
    </div>
  );
};
