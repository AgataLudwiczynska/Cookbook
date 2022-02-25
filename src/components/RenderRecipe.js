import React from "react";

const RenderRecipe = ({ element }) => {
  return (
    <section className="recipe">
      <img
        className="img"
        src={element.thumbnail_url}
        alt={element.thumbnail_alt_text}
      />
      <h2>{element.name}</h2>
      <button>See more</button>
    </section>
  );
};

export default RenderRecipe;
