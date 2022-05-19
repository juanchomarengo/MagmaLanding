import React from "react";

export const Card = ({ title, description, icon, image }) => {
  return (
    <div className="w-3/12 h-72 bg-stone-100 rounded-2xl hover:-translate-y-3 transition-all max-w-[250px]">
      <div
        className="w-full h-3/5 bg-cover bg-center rounded-t-2xl"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
