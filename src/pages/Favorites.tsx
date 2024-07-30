import products from "../db/data";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { selectTotalfavorites } from "../store/favoriteSlice";

import FavoriteItem from "../components/FavoriteItem";

const Favorites = () => {
  const productsLength = products.length;

  const getTotalfavorites = useAppSelector(selectTotalfavorites);
  const favoritesItems = useAppSelector((state) => state.favorite.favorite);

  return (
    <div className="cart">
      <Link className="back" to={"/"}>
        Back
      </Link>
      <div>
        <h1>Your Favorites Items</h1>
      </div>
      {getTotalfavorites !== productsLength ? (
        <div className="cartItems">
          {products.map((product) => {
            if (favoritesItems[product.id] !== 0) {
              return <FavoriteItem {...product} />;
            }
          })}
        </div>
      ) : (
        <h2>Your favorites is Empty</h2>
      )}
    </div>
  );
};

export default Favorites;
