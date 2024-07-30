import { FC } from "react";
import Input from "../Input";

import { PriceItem } from "../../models/Price";

interface PriceProps {
  radioPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Price: FC<PriceProps> = ({ radioPriceChange }) => {
  const prices: PriceItem[] = [
    {
      title: "All",
      value: 0,
    },
    {
      title: "$0-50",
      value: 50,
    },
    {
      title: "$50-100",
      value: 100,
    },
    {
      title: "over $100",
      value: 100000,
    },
  ];

  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      {prices.map((price) => (
        <Input
          key={price.title}
          radioChange={radioPriceChange}
          value={Number(price.value)}
          title={price.title}
          name={"test2"}
        />
      ))}
    </div>
  );
};

export default Price;
