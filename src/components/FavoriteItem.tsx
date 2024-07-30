import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addToCart,
  removeFromCart,
  updateCartItemCount,
} from "../store/cartSlice";
import { favorites } from "../store/favoriteSlice";

interface FavoriteItemProps {
  id: number;
  img: string;
  title: string;
  reviews: string;
  prevPrice: string;
  newPrice: string;
}

const FavoriteItem: FC<FavoriteItemProps> = ({
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
    <div className="cartItem">
      <img src={img} alt="" />
      <div className="description">
        <p>
          {" "}
          <b>{title}</b>{" "}
        </p>
        <p>{`$${Number(newPrice) * cartItems[id]}`}</p>
        <div className="countHandler">
          <button onClick={() => dispatch(removeFromCart({ id }))}> - </button>
          <input
            onChange={(e) =>
              dispatch(
                updateCartItemCount({ newAmount: Number(e.target.value), id })
              )
            }
            value={cartItems[id]}
          />
          <button onClick={() => dispatch(addToCart({ id }))}> + </button>
        </div>
        <button
          className={`favorite favorite-block ${
            favoritesItems[id] > 0 ? "active" : ""
          } `}
          onClick={() => dispatch(favorites({ id }))}
        ></button>
      </div>
    </div>
  );
};

export default FavoriteItem;
