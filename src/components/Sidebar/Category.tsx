import { FC } from "react";
import Input from "../Input";

interface CategoryProps {
  radioCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Category: FC<CategoryProps> = ({ radioCategoryChange }) => {
  const categories = ["All", "sneakers", "flats", "sandals", "heels"];
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      {categories.map((category) => (
        <Input
          key={category}
          radioChange={radioCategoryChange}
          value={category}
          title={category}
          name={"test"}
        />
      ))}
    </div>
  );
};

export default Category;
