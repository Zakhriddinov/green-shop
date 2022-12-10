import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
display: flex;
flex-direction: column;
`

const Main = styled.div`
display: flex;
justify-content: center;
background-color: #fff;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

color: #fff;
padding: var(--padding);
height: 78px;

width: 100%;
max-width: 1440px;
`

const Section = styled.div`
display: flex;
align-items: center;
cursor: ${({ logo }) => logo && "pointer"};

.active{
   color: var(--colorGreen);
   font-family: "CeraPro-Bold",sans-serif;
}
`
const Link = styled(NavLink)`
text-decoration: none;
color: var(--colorBlack);
font-family: "CeraPro-Regular",sans-serif;
padding: 0px 25px;
`
export { Container, Main, Wrapper, Section, Link };