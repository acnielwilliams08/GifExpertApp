import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (category: string) => {
    if (categories.some((cat) => cat.toLowerCase() === category.toLowerCase()))
      return;
    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory}></AddCategory>

      {categories.map((category) => (
        <GifGrid key={category} category={category}></GifGrid>
      ))}
    </>
  );
};
