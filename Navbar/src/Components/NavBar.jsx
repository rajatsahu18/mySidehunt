import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  position: relative;
  height: 90px;
  background-color: black;
`;

const Logo = styled.div`
  position: absolute;
  top: 24px;
  left: 30px;
  height: 60px;

  @media all and (max-width: 620px) {
    display: none;
  }
`;

const Button = styled.div`
  position: absolute;
  border: 1px solid #0EBAD5;
  border-radius: 5px;
  background-color: #0EBAD5;
  padding: 5px;
  width: 50px;
  top: 30px;
  right: 400px;
  color: white;
  cursor: pointer;
`

const Links = styled.div`
  position: absolute;
  top: 24px;
  right: 40px;
  letter-spacing: 1px;
  font-weight: 300;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
  margin-left: 50px;
  cursor: pointer;
  font-size: 30px;

  @media all and (max-width: 620px) {
    font-size: 20px;
  }
`;

const NavBar = () => {
  return (
    <div>
      <Wrapper>
        <Logo>
          <img
            src="https://d27028dliefpk3.cloudfront.net/static/brand/MasaiLogo.svg"
            alt="logo"
          />
        </Logo>
        <Button>Login</Button>
        <Links>
          <A>Contact us</A>
          <A>About us</A>
        </Links>
      </Wrapper>
    </div>
  );
};

export default NavBar;
