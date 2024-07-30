import { FC } from "react";

interface ButtonsProps {
  value: string;
  onRecommended: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Buttons: FC<ButtonsProps> = ({ onRecommended, value }) => {
  return (
    <button onClick={onRecommended} className="btns">
      {value}
    </button>
  );
};

export default Buttons;
