import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import products from "../db/data";
import { RootState } from ".";

interface Favorites {
  [key: number]: number;
}

interface FavoritesState {
  favorite: Favorites;
}

const getDefaultFavorites = (): Favorites => {
  let favorites: Favorites = {};
  for (let i = 1; i < products.length + 1; i++) {
    favorites[i] = 0;
  }

  return favorites;
};

const initialState: FavoritesState = {
  favorite: getDefaultFavorites(),
};

export const selectTotalfavorites = (state: RootState): number => {
  const favorite = state.favorite.favorite;
  let totalfavorites = 0;

  for (const item in favorite) {
    if (favorite[item] == 0) {
      totalfavorites++;
    }
  }

  return totalfavorites;
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    favorites(state, action) {
      if (state.favorite[action.payload.id] == 0) {
        state.favorite[action.payload.id] += 1;
      } else {
        state.favorite[action.payload.id] -= 1;
      }
    },
  },
});

export const { favorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
