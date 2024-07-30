import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Recommended from "../components/Recommended";

import products from "../db/data";
import { Product } from "../models/Product";
import Card from "../components/Card";

const Shop = () => {
  const [items, setItems] = useState<Product[]>(products);
  const [query, setQuery] = useState<string>("");

  const [categoryItems, setCategoryItems] = useState<Product[]>([]);
  const [priceItems, setPriceItems] = useState<Product[]>([]);
  const [colorsItems, setColorsItems] = useState<Product[]>([]);

  const [error, setError] = useState<boolean>(false);

  //FilterSearch
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);

    setItems(
      products.filter((product) =>
        product.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  //RadioFilter
  const handleRadioCategoryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCategoryItems(
      products.filter(({ category }) => {
        if (category === event.target.value) {
          return true;
        }
        if (event.target.value == "All") {
          return true;
        }
      })
    );
  };
  const handleRadioPriceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedValue = parseFloat(event.target.value);
    setPriceItems(
      products.filter(({ newPrice }) => {
        const price = parseFloat(newPrice);

        if (selectedValue > 0 && selectedValue < 10000) {
          if (
            Number(price) > selectedValue - 50 &&
            Number(price) <= selectedValue
          ) {
            return true;
          }
        } else if (selectedValue == 0) {
          return true;
        } else {
          if (Number(price) > 100) {
            return true;
          }
        }
      })
    );
  };
  const handleRadioColorsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setColorsItems(
      products.filter(({ color }) => {
        if (color === event.target.value) {
          return true;
        }
        if (event.target.value == "All") {
          return true;
        }
      })
    );
  };

  //ApplyFilter
  function apply() {
    if (
      categoryItems.length == 0 ||
      priceItems.length == 0 ||
      colorsItems.length == 0
    ) {
      setError(true);
    } else {
      const firstFiltered = categoryItems.filter((item) =>
        priceItems.includes(item)
      );
      setItems(firstFiltered.filter((item) => colorsItems.includes(item)));
      setError(false);
    }
  }

  //ButtonsFilter
  const handleBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    const targetText = target.textContent?.trim() || "";

    setItems(
      products.filter(({ company }) => {
        if (company === targetText) {
          return true;
        }
        if (targetText === "All Products") {
          return true;
        }
        return false;
      })
    );
  };

  return (
    <>
      <Navbar value={query} search={handleInputChange} />
      <Sidebar
        apply={apply}
        handleRadioPriceChange={handleRadioPriceChange}
        handleRadioCategoryChange={handleRadioCategoryChange}
        handleRadioColorsChange={handleRadioColorsChange}
        error={error}
      />
      <Recommended onClick={handleBtnClick} />
      <div className="card-container">
        {items.length !== 0 ? (
          items.map((product) => <Card key={product.id} {...product} />)
        ) : (
          <b>Products not found</b>
        )}
      </div>
    </>
  );
};

export default Shop;
