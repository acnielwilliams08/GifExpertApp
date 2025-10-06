import { useState } from "react";

interface AddCategoryProps {
  onAddCategory: (category: string) => void;
}

export const AddCategory: React.FC<AddCategoryProps> = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.target.value;
    setInputValue(actualValue);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onAddCategory(inputValue);
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
