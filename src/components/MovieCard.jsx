import React from "react";

const MovieCard = ({props}) => {
  const {Title, Year, Poster, Type} = props;
  return (
    <div className="cine">
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img
          src={
            Poster !== "N/A"
              ? Poster
              : "http://via.placeholder.com/400"
          }
          alt={Title}
        />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;