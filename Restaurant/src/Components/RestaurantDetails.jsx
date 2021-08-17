import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const RestaurantDetails = ({ data }) => {
  const {
    name,
    cuisine,
    costForTwo,
    minOrder,
    rating,
    votes,
    reviews,
    payment_methods,
    src
  } = data;

  const { Cash, Card } = payment_methods;

  return (
    <div
      style={{
        width: "47%",
        margin: "auto",
        marginTop: "1%",
        marginLeft: "27%",
        marginBottom: "1%",
        border: "1px solid grey",
        height: "275px",
        display: "grid",
        gridTemplateRows: "5fr 1fr",
        gridTemplateColumns: "auto",
        backgroundColor: "whitesmoke"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 4fr 1fr",
          gridTemplateRows: "auto"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img
            src={src}
            style={{ marginLeft: "10px" }}
            width="180"
            height="180"
            alt="restaitant"
          />
        </div>
        <div
          style={{
            padding: "25px",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            alignItems: "start"
          }}
        >
          <div style={{ color: "brown", fontWeight: "900", fontSize: "30px" }}>
            {name}
          </div>
          <div style={{ fontSize: "20px", fontWeight: "600", color: "grey" }}>
            {cuisine.join(" ,")}
          </div>
          <div style={{ fontSize: "20px", fontWeight: "600", color: "grey" }}>
            Costs ₹ {costForTwo} for one
          </div>
          <div>Min : ₹ {minOrder} </div>
          <div style={{ fontSize: "14px", color: "black" }}>
            Accept {Cash && Card ? "Cash AND Card" : Cash ? "Cash" : "Card"}{" "}
            only
          </div>
        </div>
        <div
          style={{
            padding: "13px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-end"
          }}
        >
          <div
            style={{
              width: "33%",
              backgroundColor: "green",
              padding: "10px",
              color: "white",
              fontWeight: 600,
              textAlign: "center",
              borderRadius: "5px"
            }}
          >
            {rating}
          </div>
          <div
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "grey",
              marginTop: "5px"
            }}
          >
            {votes} votes
          </div>
          <div
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "grey",
              marginTop: "5px"
            }}
          >
            {reviews} reviews
          </div>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplate: "10fr 2fr",
          gridTemplateRows: "auto",
          borderTop: "1px solid grey"
        }}
      >
        <div></div>
        <button
          style={{
            backgroundColor: "lightgrey",
            color: "green",
            fontSize: "20px",
            justifyContent: "center",
            width: "200px",
            height: "47px",
            marginLeft: "72%",
            border: "none",
            cursor: "pointer"
          }}
        >
          Order Online <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export { RestaurantDetails };
