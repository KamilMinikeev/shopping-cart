import { FC } from "react";

interface InputProps {
  title: string;
  value: string | number;
  name: string;
  radioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ title, value, name, radioChange }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={radioChange} value={value} type="radio" name={name} />
      <span className="checkmark"></span>
      {title}
    </label>
  );
};

export default Input;
