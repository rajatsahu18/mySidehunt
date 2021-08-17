import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagramSquare
} from "react-icons/fa";
import styles from "./Styles/Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <FaFacebookSquare size="30px" />
      <FaTwitterSquare size="30px" />
      <FaYoutubeSquare size="30px" />
      <FaInstagramSquare size="30px" />
      <h1>This is Light and Dark mode assigment.</h1>
    </div>
  );
}

export { Footer };
