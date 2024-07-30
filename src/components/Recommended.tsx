import { FC } from "react";

import Buttons from "./Buttons";

interface RecommendedProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Recommended: FC<RecommendedProps> = ({ onClick }) => {
  const recommended = ["All Products", "Nike", "Adidas", "Puma", "Vans"];
  return (
    <div>
      <h2 className="recommended-title ">Recommended</h2>
      <div className="recommended-flex">
        {recommended.map((button) => (
          <Buttons key={button} value={button} onRecommended={onClick} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
