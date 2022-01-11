import React from "react";

const Card = ({ CardImage, CardTitle, CardDescription, CardPrice }) => {
  return (
    <div className="grid gap-5 px-6 my-16 lg:px-0">
      <figure>
        <img src={CardImage} />
      </figure>
      <h3 className="text-2xl text-center font-semibold">{CardTitle}</h3>
      <p className="text-center">{CardDescription}</p>
      <p className="text-center font-bold">{CardPrice}</p>
    </div>
  );
};

export default Card;
