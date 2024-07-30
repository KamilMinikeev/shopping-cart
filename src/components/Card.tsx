import { FaStar } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { FC } from "react";

import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addToCart } from "../store/cartSlice";
import { favorites } from "../store/favoriteSlice";

interface CardProps {
  id: number;
  img: string;
  title: string;
  reviews: string;
  prevPrice: string;
  newPrice: string;
}

const Card: FC<CardProps> = ({
  id,
  img,
  title,
  reviews,
  prevPrice,
  newPrice,
}) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cart);
  const favoritesItems = useAppSelector((state) => state.favorite.favorite);

  return (
    <div className="card">
      <img className="card-img" src={img} alt="Shoe" />

      <h3 className="card-title">{title}</h3>
      <div className="card-reviews">
        <FaStar className="rating-star" />
        <FaStar className="rating-star" />
        <FaStar className="rating-star" />
        <FaStar className="rating-star" />
        <span className="total-reviews">{reviews}</span>
      </div>
      <div className="card-price">
        <div className="price">
          <del>{prevPrice}</del>
          {` ${newPrice}`}
        </div>
        <div className={`bag-icon ${favoritesItems[id] > 0 ? "active" : ""}`}>
          <GrFavorite onClick={() => dispatch(favorites({ id }))} />
        </div>
      </div>

      <button className="card-btn" onClick={() => dispatch(addToCart({ id }))}>
        Add To Cart {cartItems[id] > 0 ? `(${cartItems[id]})` : ""}
      </button>
      <p>
        {cartItems[id] > 0
          ? "Total count: $" + cartItems[id] * Number(newPrice)
          : ""}
      </p>
    </div>
  );
};

export default Card;
