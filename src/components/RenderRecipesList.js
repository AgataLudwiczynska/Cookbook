import React, { useEffect, useState } from "react";
import RenderRecipe from "./RenderRecipe";

const RenderRecipesList = () => {
  const [data, setData] = useState([]);

  useEffect(
    () =>
      fetch("https://tasty.p.rapidapi.com/recipes/list?from=0&size=39", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "tasty.p.rapidapi.com",
          "x-rapidapi-key":
            "e2c2070033mshf22bdfbca05d44cp11eb46jsnc089b6e9865f",
        },
      })
        .then((response) => response.json())
        .then((data) => data.results)
        .then(setData)
        .catch(console.error),
    []
  );

  return (
    <div className="recipes-list">
      {data.map((el) => (
        <RenderRecipe key={el.id} element={el} />
      ))}
    </div>
  );
};

export default RenderRecipesList;
