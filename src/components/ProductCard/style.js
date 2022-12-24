import styled from 'styled-components';
import Basket from '../../assets/icons/bag.svg'
import Heart from '../../assets/icons/heart.svg'
import Search from '../../assets/icons/search.svg'

const HoverElement = styled.div`
position: absolute;
display: none;
z-index: 20;
bottom: 60px;
left: 25%;
@media screen and (max-width:768px){
   display: inline-block;
   display: flex;
   gap: 10px;
   bottom: 20px;
}
@media screen and (max-width:556px){
   display: inline-block;
   display: flex;
   gap: 10px;
}
`

const Container = styled.div`
width: 100%;
max-width: 258px;
background-color: white;
cursor: pointer;
margin-bottom: ${({ top }) => top && "40px"};
position: relative;
&:hover ${HoverElement}{
   display: inline-block;
   display: flex;
   gap: 10px;
}
@media screen and (max-width:768px){
   max-width: 200px;
   width: 100%;
}
@media screen and (max-width:556px){
   max-width: 156px;
   width: 100%;
}
`

const ImageWrap = styled.div`
width: 100%;
max-height: 300px;
background-color: #FBFBFB;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 20px;

@media screen and (max-width:768px){
   max-height: 230px;
}

`
ImageWrap.Img = styled.img`
width: 100%;
`
const Content = styled.div`
display: flex;
flex-direction: column;
`
Content.Title = styled.p`
font-family: 'CeraPro-Regular',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;
color: var(--colorBlack);
margin: 12px 0px 6px 0px;
@media screen and (max-width:768px){
   font-size: 15px;
}
@media screen and (max-width:556px){
   font-size: 15px;
}
`
Content.Price = styled.h4`
font-family: 'CeraPro-Bold',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: var(--colorGreen);
@media screen and (max-width:768px){
   font-size: 15px;
}
@media screen and (max-width:556px){
   font-size: 15px;
}
`
const Links = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: 35px;
height: 35px;
background: #FFFFFF;
border-radius: 4px;
box-shadow: 0 0 5px rgba(70, 163, 88, 0.1);
&:hover {
   svg,path{
      fill: var(--colorGreen);
   }
}
@media screen and (max-width:768px){
   width: 25px;
   height: 25px;
}
pointer-events:${({ disabled }) => disabled ? "background: red;" : null};
`
Links.Basket = styled(Basket)``
Links.Heart = styled(Heart)``
Links.Search = styled(Search)``

export { Container, Content, ImageWrap, HoverElement, Links }