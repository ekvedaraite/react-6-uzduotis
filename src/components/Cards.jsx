import React from 'react';

const Cards = ({ data }) => {
  return (
    <section className="cards">
      {data.map((property, index) => (
        <div key={index} className="card">
          <img src={property.image} alt={property.description} />
          <div className="text">
            <h3>{property.city}</h3>
            <p>{property.description}</p>
            <p className="price">{property.price} Eur</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
