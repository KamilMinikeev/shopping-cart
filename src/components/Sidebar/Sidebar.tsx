import React from "react";
import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";
import { FaCartPlus } from "react-icons/fa";

import { FC } from "react";

interface SidebarProps {
  handleRadioPriceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRadioCategoryChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleRadioColorsChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  apply: () => void;
  error: boolean;
}

const Sidebar: FC<SidebarProps> = ({
  handleRadioCategoryChange,
  handleRadioColorsChange,
  handleRadioPriceChange,
  apply,
  error,
}) => {
  return (
    <>
      <div className="sidebar">
        <div className="logo-container">
          <h1>
            <FaCartPlus />
          </h1>
        </div>
        <Category radioCategoryChange={handleRadioCategoryChange} />
        <Price radioPriceChange={handleRadioPriceChange} />
        <Colors radioColorsChange={handleRadioColorsChange} />
        <button onClick={apply} className="btns apl-btn">
          Apply
        </button>
        {error ? <b className="filter-error">Choose all filters</b> : ""}
      </div>
    </>
  );
};

export default Sidebar;
