import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    setCategories(["Hunter x Hunter", ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input*/}
      <AddCategory></AddCategory>

      {/* Listado de Gif */}
      <button onClick={onAddCategory}>Agregar</button>

      <ol>
        {categories.map((category, index) => {
          return <li key={index}> {category} </li>;
        })}
      </ol>
      {/* Gif Item  */}
    </>
  );
};
