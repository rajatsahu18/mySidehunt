import React from "react";
import styles from "./Styles/Form.module.css";

const Form = () => {
  return (
    <form>
      <div className={styles.formContainer}>
        <label> Email: </label>
        <input type="text" name="email" id="email" placeholder="Email" />
        <br />
        <label> Password: </label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
        />
      </div>

      <input type="submit" value="SUBMIT" className={styles.submitButton} />
    </form>
  );
};

export { Form };
