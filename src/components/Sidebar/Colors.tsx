import { FC } from "react";
import Input from "../Input";

interface ColorsProps {
  radioColorsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Colors: FC<ColorsProps> = ({ radioColorsChange }) => {
  const colors = ["All", "black", "white", "red", "blue", "green"];
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      {colors.map((color) => (
        <Input
          key={color}
          radioChange={radioColorsChange}
          value={color}
          title={color}
          name={"colors"}
        />
      ))}
    </div>
  );
};

export default Colors;
