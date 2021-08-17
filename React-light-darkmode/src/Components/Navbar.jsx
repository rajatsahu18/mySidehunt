import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #fe3169;
  background-color: #fe3169;
  padding: 0;

  button {
    border: 1px solid peru;
    border-radius: 3px;
    outline: none;
    padding: 2px;
    width: 150px;
    margin: 15px;
    background-color: peru;
  }
`;

function Navbar() {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <div>
        <button onClick={toggleTheme}>
          Switch to {`${currentTheme === "light" ? "dark" : "light"} mode`}
        </button>
      </div>
    </Wrapper>
  );
}

export { Navbar };
