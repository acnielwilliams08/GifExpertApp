import { useState } from "react";

interface AddCategoryProps {
  onNewCategory: (category: string) => void;
}

export const AddCategory: React.FC<AddCategoryProps> = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.target.value;
    setInputValue(actualValue);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputTrim = inputValue.trim();

    if (inputTrim.length <= 1) return;

    onNewCategory(inputTrim);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
