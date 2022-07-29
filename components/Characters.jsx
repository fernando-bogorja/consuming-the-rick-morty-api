import React from "react";

export const Characters = ({ characters }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div className="col mb-4" key={index}>
          <div className="card" style={{ minWidth: "200px" }}>
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <hr />
              <p className="card-text"> Species: {item.species}</p>
              <p className="card-text"> Location: {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
