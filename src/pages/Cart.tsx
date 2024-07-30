import React from "react";
import products from "../db/data";
import { useNavigate, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { selectCartSummary, checkout } from "../store/cartSlice";
import CartItem from "../components/CartItem";

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cart);
  const { totalAmount } = useAppSelector(selectCartSummary);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <Link className="back" to={"/"}>
        Back
      </Link>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem {...product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              dispatch(checkout());
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
