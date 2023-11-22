import { ChangeEvent, useState } from "react";

interface Props {
  label: string;
  id: string;
  categories: string[];
}

const FormDropdown = ({ label, id, categories }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select
        id={id}
        className="form-select"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option disabled value={""}>
          Select category...
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormDropdown;
