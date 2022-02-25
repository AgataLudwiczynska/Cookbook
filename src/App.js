import React from "react";
import "./App.css";
//import RenderTags from "./components/RenderTags";
import RenderRecipesList from "./components/RenderRecipesList";

function App() {
  return (
    <div className="App">
      {/* <RenderTags type={"cuisine"} /> */}
      <RenderRecipesList />
    </div>
  );
}

export default App;
