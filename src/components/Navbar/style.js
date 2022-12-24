import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Search from '../../assets/icons/search.svg';
import Bag from '../../assets/icons/bag.svg';
import Login from '../../assets/icons/login.svg';
import User from '../../assets/icons/user.svg';
import Exit from '../../assets/icons/close.svg'

const Container = styled.nav`
display: flex;
flex-direction: column;
`
const Main = styled.div`
display: flex;
justify-content: center;
background-color: #fff;


.sticky-nav{
   position: fixed;
   top: 0;
   width: 100%;
}
`
/* tablet - desktop */
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

color: #fff;
height: 78px;

width: 100%;
max-width: 1200px;
border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);

@media screen and (min-width:992px) {
   margin: 0 30px;
}
@media screen and (max-width:768px){
  border-bottom:none;
  padding: 0px 30px;
  height: 60px;
  .avatar{
   display: none;
  }
  
}
@media screen and (min-width:768px) {
   margin: 0 30px;
}
`

const Section = styled.div`
display: flex;
align-items: center;
cursor: ${({ logo }) => logo && "pointer"};
img{
   @media screen and (max-width:768px) {
      margin-right: 10px;
   }
}
.active{
   color: var(--colorGreen);
   border-bottom: ${({ active }) => active && "3px solid var(--colorGreen)"};
   padding: 28px 0;
   
   @media screen and (max-width:768px) {
      border-bottom:none;
   }
}

`
const Link = styled(NavLink)`
text-decoration: none;
color: var(--colorBlack);
font-family: "CeraPro-Medium",sans-serif;
margin: ${({ active }) => active && "0px 25px"};
border-bottom:${({ active }) => active && "3px solid #fff"};
@media screen and (max-width:768px) {
   display: none;
   border-bottom:none;
}
`
const Basket = styled.div`
display: flex;
align-items: center;
position: relative;
margin: 0px 30px;
cursor: pointer;

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
   @media screen and (max-width:768px) {
      right: -16px;
   }
}
`
const Mobile = styled.div`
display: none;
@media screen and (max-width:768px){
  position: fixed;
  bottom: 0;
  z-index: 22;
  height: 60px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px -10px 30px rgba(184, 184, 184, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  .active{
    color: var(--colorGreen);
    svg,path{
      fill: var(--colorGreen);
    }
  }
}
`
const MobileLink = styled(NavLink)`
@media screen and (max-width:768px){  
   text-decoration: none;
   color: #D9D9D9;
   font-family: "CeraPro-Regular",sans-serif;
   font-size: 14px;
   display: flex;
   flex-direction: column;
   align-items: center;
   svg,path{
      fill: #D9D9D9;
    }
}
`

const Icon = styled.div``
Icon.Search = styled(Search)`
svg , path{
   fill: var(--colorSilver-ae);  
}
`
Icon.Basket = styled(Bag)``
Icon.Login = styled(Login)`
margin-right: 6px;
`
Icon.User = styled(User)`
svg,path{
   fill: #fff;
}
`
Icon.Close = styled(Exit)`
svg,path{
   fill: red;
}
cursor: pointer;
width: 15px;
height: 15px;
`
const Menu = styled.div`
width: 177px;
display: flex;
flex-direction: column;
background-color: #fff;
padding: 16px;
gap: 16px;
border-radius: 5px;
box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`
Menu.Item = styled.div`
  font-family: "CeraPro-Regular",sans-serif;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  color: #000000;
`
const Cart = styled.div`
width: 300px;
display: flex;
flex-direction: column;
background-color: #fff;
padding: 20px;
gap: 10px;
box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`
Cart.Wrap = styled.div`
display: flex;
justify-content: space-between;
width: 260px;
height: 50px;
box-shadow: 0px 1px 5px var(--colorGreen);
    border-radius: 10px;
    padding: 5px;
img{
   width: 40px;
   height: 40px;
}
`
export { Container, Main, Wrapper, Section, Link, Basket, Icon, Mobile, MobileLink, Menu, Cart };