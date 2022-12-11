import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Main, Section, Wrapper, Link, Basket } from "./style";
import logo from "../../assets/images/logo.png";
import navbar from "../../utils/navbar";
import Footer from "../Footer";
import Search from "../Search";
import { Button } from "../Generic";
import { default as login } from "../../assets/icons/login.svg";
import { default as basket } from "../../assets/icons/bag.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/")} logo>
            <img src={logo} alt="logo" />
          </Section>
          <Section route>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    key={index}
                    to={path}
                    className={({ isActive }) => isActive && "active"}
                    route
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Search />
            <Link to="/products">
              <Basket>
                <img src={basket} alt="basketIcon" />
                <div className="count">99</div>
              </Basket>
            </Link>
            <Link to="/basket">
              <Button type="success" width="100" height="35">
                <img src={login} alt="loginIcon" />
                Login
              </Button>
            </Link>
          </Section>
        </Wrapper>
      </Main>
      <div className="menu_line"></div>
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;
