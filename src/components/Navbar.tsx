import React, { FC } from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useAppSelector } from "../store/hooks";
import { selectCartSummary } from "../store/cartSlice";
import { relative } from "path";

interface NavProps {
  value: string;
  search: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Navbar: FC<NavProps> = ({ search, value }) => {
  const { countAmount } = useAppSelector(selectCartSummary);

  return (
    <nav>
      <div className="nav-container">
        <input
          value={value}
          onChange={search}
          type="text"
          className="search-input"
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <Link to={"/favorites"}>
          <FiHeart className="nav-icons" />
        </Link>
        <Link to={"/"}>
          <AiOutlineUserAdd className="nav-icons" />
        </Link>
        <Link to={"/cart"} style={{ position: "relative" }}>
          <AiOutlineShoppingCart className="nav-icons" />
          {countAmount > 0 ? <div className="count">{countAmount}</div> : ""}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
