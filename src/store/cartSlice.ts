import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import products from "../db/data";
import { RootState } from ".";

interface Cart {
  [key: number]: number;
}

interface CartState {
  cart: Cart;
}

const getDefaultCart = (): Cart => {
  let cart: Cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};

const initialState: CartState = {
  cart: getDefaultCart(),
};

export const selectCartSummary = (state: RootState) => {
  const cart = state.cart.cart;
  let totalAmount = 0;
  let countAmount = 0;

  Object.keys(cart).forEach((item) => {
    const itemCount = cart[Number(item)];
    if (itemCount > 0) {
      const itemInfo = products.find((product) => product.id === Number(item));
      if (itemInfo) {
        totalAmount += itemCount * Number(itemInfo.newPrice);
        countAmount += itemCount;
      }
    }
  });

  return { totalAmount, countAmount };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ id: number }>) {
      state.cart[action.payload.id] += 1;
    },
    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      state.cart[action.payload.id] -= 1;
    },
    updateCartItemCount(
      state,
      action: PayloadAction<{ id: number; newAmount: number }>
    ) {
      state.cart[action.payload.id] = action.payload.newAmount;
    },
    checkout(state) {
      state.cart = getDefaultCart();
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemCount, checkout } =
  cartSlice.actions;
export default cartSlice.reducer;
