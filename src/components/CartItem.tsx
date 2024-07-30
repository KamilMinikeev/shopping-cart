import { FC } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  addToCart,
  removeFromCart,
  updateCartItemCount,
} from "../store/cartSlice";

interface CartItemProps {
  id: number;
  img: string;
  title: string;
  reviews: string;
  prevPrice: string;
  newPrice: string;
}

const CartItem: FC<CartItemProps> = ({
  id,
  img,
  title,
  reviews,
  prevPrice,
  newPrice,
}) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cart);

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
      </div>
    </div>
  );
};

export default CartItem;
