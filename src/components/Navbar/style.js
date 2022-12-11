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
   border-bottom: ${({ route }) => route && "3px solid var(--colorGreen)"};
}
`
const Link = styled(NavLink)`
text-decoration: none;
color: var(--colorBlack);
font-family: "CeraPro-Medium",sans-serif;
margin: ${({ route }) => route && "0px 25px"};
border-bottom:${({ route }) => route && "3px solid #fff"};
`
const Basket = styled.div`
display: flex;
align-items: center;
position: relative;
margin: 0px 30px;

.count{
   position: absolute;
   top: -2px;
   right: -5px;
   width: 15px;
   height: 15px;
   background: var(--colorGreen);
   border: 1px solid #FFFFFF;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   /*text style*/
   font-size: 10px;
   font-family: "CeraPro-Medium",sans-serif;
   color: white;
}
`

export { Container, Main, Wrapper, Section, Link, Basket };