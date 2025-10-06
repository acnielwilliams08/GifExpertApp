import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (category: string) => {
    if (categories.some((cat) => cat.toLowerCase() === category.toLowerCase()))
      return;
    setCategories([category, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input*/}
      <AddCategory onNewCategory={onAddCategory}></AddCategory>

      {/* Listado de Gif */}
      <ol>
        {categories.map((category) => {
          {
            /* Gif Item  */
          }
          return <li key={category}> {category} </li>;
        })}
      </ol>
    </>
  );
};
