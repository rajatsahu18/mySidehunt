import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./Styles/Header.module.css";

const initState = {
  name: "",
  costForTwo: "",
  minOrder: "",
  rating: "",
  votes: "",
  reviews: "",
  payment_methods: ""
};

export function RestaurantForm({ handleAdd }) {
  const [addRestaurant, setAddRestaurant] = useState(false);
  const [restaurant, setRestaurant] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({
      ...restaurant,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(restaurant);
    setRestaurant({ ...initState });
  };

  return (
    <div>
      <button
        onClick={() => setAddRestaurant(true)}
        className={styles.addRestaurantButton}
      >
        Add Restaurants
      </button>
      <Modal
        isOpen={addRestaurant}
        onRequestClose={() => setAddRestaurant(false)}
        className={styles.modal}
        style={{ overlay: { backgroundColor: "lightgrey", opacity: "0.9" } }}
      >
        <h2 style={{ marginTop: "10px" }}>Add Details</h2>
        <br />
        <hr />
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="rest"
            value={restaurant.rest}
            onChange={handleChange}
            placeholder="Enter Restaurant Name"
          />
          <input
            type="text"
            name="price"
            value={restaurant.price}
            onChange={handleChange}
            placeholder="Enter Price For Two"
          />
          <input
            type="text"
            name="minOrder"
            value={restaurant.minOrder}
            onChange={handleChange}
            placeholder="Enter Minimum Order"
          />
          <input
            type="text"
            name="payment"
            value={restaurant.payment}
            onChange={handleChange}
            placeholder="Enter Payment Type"
          />
          <input
            type="text"
            name="rating"
            value={restaurant.rating}
            onChange={handleChange}
            placeholder="Enter Rating"
          />
          <input
            type="text"
            name="votes"
            value={restaurant.votes}
            onChange={handleChange}
            placeholder="Enter Votes"
          />
          <input
            type="text"
            name="reviews"
            value={restaurant.reviews}
            onChange={handleChange}
            placeholder="Enter Reviews"
          />
          <input
            style={{
              border: "1px solid #CC202E",
              background: "#CC202E",
              outline: "none",
              cursor: "pointer",
              color: "white"
            }}
            type="submit"
            value="ADD"
          />
        </form>
      </Modal>
    </div>
  );
}
