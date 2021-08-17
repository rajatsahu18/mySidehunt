import React, { useState } from "react";
import { RestaurantDetails } from "./RestaurantDetails";
import rest_list from "../data.json";
import styles from "./Styles/RestaurantList.module.css";
import { RestaurantCard } from "./RestaurantCard";

const RestaurantList = () => {
  const [details, setDetails] = useState(rest_list);
  const [filterByRating, setFilterByRating] = useState(0);
  const [paymentMethods, setPaymentMethods] = useState("all");
  const [sortByCost, setSortByCost] = useState(null);
  const [perPage, setPerPage] = useState(5);
  const [activePage, setActivePage] = useState(1);
  const [newRestaurant, setNewRestaurant] = useState([]);

  const filterCondition = ({ rating, payment_methods }, index) => {
    const { Cash, Card } = payment_methods;

    let paymentCondition = true;

    if (paymentMethods === "Cash") {
      paymentCondition = Cash ? true : false;
    } else if (paymentMethods === "Card") {
      paymentCondition = Card ? true : false;
    }

    const offset = (activePage - 1) * perPage;
    const pageCondition = index >= offset && index < offset + perPage;

    return rating >= filterByRating && paymentCondition && pageCondition;
  };

  const sortCondition = (a, b) => {
    if (sortByCost === null) {
      return null;
    }
    if (sortByCost === "Low to High") {
      return a.costForTwo - b.costForTwo;
    }
    if (sortByCost === "High to Low") {
      return b.costForTwo - a.costForTwo;
    }
  };

  const totalPages = Math.ceil(details.length / perPage);

  return (
    <div>
      <div className={styles.filterButtonDiv}>
        {[4, 3, 2, 1, 0].map((rating, i) => (
          <button
            className={styles.filterButton}
            onClick={() => setFilterByRating(rating)}
          >
            {rating === 0 ? "ALL" : rating + " And Above"}
          </button>
        ))}
      </div>
      <br />
      <div className={styles.paymentButtonDiv}>
        {["Cash", "Card", "All"].map((method, i) => (
          <button
            className={styles.paymentButton}
            onClick={() => setPaymentMethods(method)}
          >
            {method}
          </button>
        ))}
      </div>
      <br />
      <div className={styles.sortButtonDiv}>
        {["Low to High", "High to Low"].map((order, i) => (
          <button
            className={styles.sortButton}
            onClick={() => setSortByCost(order)}
          >
            {order}
          </button>
        ))}
      </div>

      <div className={styles.paginationButtonDiv}>
        <br />
        {new Array(totalPages).fill(0).map((el, idx) => (
          <button
            className={styles.paginationButton}
            key={idx}
            onClick={() => setActivePage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <div>
        {details &&
          details
            ?.filter(filterCondition)
            .sort(sortCondition)
            .map((item, idx) => {
              return <RestaurantDetails key={item.id} data={item} />;
            })}
      </div>
      <div>
        {newRestaurant.map((item) => (
          <RestaurantCard {...item} />
        ))}
      </div>
    </div>
  );
};

export { RestaurantList };
