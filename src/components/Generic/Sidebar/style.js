import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
max-width: 280px;
width: 100%;
max-height: 431px;
height: 100%;
background: #FBFBFB;
padding: 30px 0px;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin-top: 20px;
svg,path{
   fill: #727272;
   margin-right: 12px;
}
.active{
    color: var(--colorGreen);
    background-color: white;
    height: 39px;
    border-left: 5px solid var(--colorGreen);
    font-family: "CeraPro-Bold",sans-serif;
    svg,path{
      fill: var(--colorGreen);
    }
}
`

const Link = styled(NavLink)`
   text-decoration: none;
   color: #727272;
   font-family: "CeraPro-Regular",sans-serif;
   font-size: 14px;
   display: flex;
   align-items: center;
   padding-left: 18px;
   height: 39px;
   border-left: 5px solid #FBFBFB;
`
export { Container, Wrapper, Link }