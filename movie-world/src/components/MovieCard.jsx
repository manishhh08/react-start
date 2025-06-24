import React from "react";
import image from "../assets/image.jpg";

const MovieCard = () => {
  return (
    <>
      <img src={image} alt="" style={{ height: "200px", width: "200px" }} />
      <div className="card-details">
        <div className="card-header">This is the card header</div>
        <div className="card-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsum
          ducimus sunt. Eum modi non, veritatis, ipsam cumque illum dignissimos
          quaerat officiis natus amet iure sunt fugiat dicta tenetur velit?
        </div>
        <div className="card-button">
          <button>Drama</button>
          <button>Action</button>
          <button>Delete</button>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
