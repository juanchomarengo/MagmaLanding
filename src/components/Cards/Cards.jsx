import React from "react";
import { Container } from "../common/Container";
import { Card } from "./Card";
import { BiPlanet } from "react-icons/bi";

const cardData = {
  title: "Card Title",
  description: "Card Description",
  image: "https://via.placeholder.com/150",
  icon: <BiPlanet />,
};

const arrayOfCards = [cardData, cardData, cardData];

export const Cards = () => {
  return (
    <div className="bg-slate-200">
      <Container className="flex justify-around py-4">
        {arrayOfCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Container>
    </div>
  );
};
