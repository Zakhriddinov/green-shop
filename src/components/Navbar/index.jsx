import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Main, Section, Wrapper, Link } from "./style";
import logo from "../../assets/images/logo.png";
import navbar from "../../utils/navbar";
import Footer from "../Footer";
import {ReactComponent as SVG} from "../../assets/icons/search.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/")} logo>
            <img src={logo} alt="logo" />
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    key={index}
                    to={path}
                    className={({ isActive }) => isActive && "active"}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Link to="/">
              <img src={SVG} alt="" />
            </Link>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;
