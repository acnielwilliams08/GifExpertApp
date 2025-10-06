import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (category: string) => {
    setCategories([category, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input*/}
      <AddCategory onAddCategory={onAddCategory}></AddCategory>

      {/* Listado de Gif */}
      <ol>
        {categories.map((category, index) => {
          {
            /* Gif Item  */
          }
          return <li key={index}> {category} </li>;
        })}
      </ol>
    </>
  );
};
