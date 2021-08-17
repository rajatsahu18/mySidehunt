import React, { useState } from "react";
import styles from "./Styles/Header.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { RestaurantForm } from "./RestaurantForm";

export function Header() {
  const [newRestaurant, setNewRestaurant] = useState([]);

  const handleAdd = ({
    name,
    costForTwo,
    minOrder,
    rating,
    votes,
    reviews,
    payment_methods
  }) => {
    const payload = {
      name,
      costForTwo,
      minOrder,
      rating,
      votes,
      reviews,
      payment_methods
    };
    const updateRestaurants = [...newRestaurant, payload];
    setNewRestaurant(updateRestaurants);
  };

  return (
    <div className={styles.header}>
      <div>Kolkata Street</div>
      <div>
        <RestaurantForm handleAdd={handleAdd} />
      </div>
      <div>
        <BsFillPersonFill size="30px" />
      </div>
    </div>
  );
}
