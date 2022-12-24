import styled from "styled-components";

const Container = styled.div`
.carousel .thumb {
   border: 1px solid #fff;
   width: 100px !important;
   height: 100px !important;
   padding: 18px;
   background: #FBFBFB;
   display: flex;
   flex-direction: column;
   margin-bottom: 10px;
   cursor: pointer;
   @media screen and (max-width:768px){
     display: inline-block;
     margin: 10px;
     width: 60px !important;
      height: 60px !important;
   }
}
.carousel .thumb.selected, .carousel .thumb:hover {
    border: 1px solid var(--colorGreen);
}
.carousel .thumbs-wrapper{
   margin: 20px 0;
   margin-top: -444px;
   @media screen and (max-width:768px){
      margin-top: 0;
   }
}
`
const ImageWrapper = styled.div``
const Img = styled.div`
max-width: 500px;
height: 444px;
background: #FBFBFB;
border-radius: 6px;
padding: 12px;
margin-left: 129px;
@media screen and (max-width:768px){
   margin: 50px 0px;
   height: 300px;
   width: 300px;
}
img{
   width: 100%;
   height: 100%;
}
`
export { Container, ImageWrapper, Img }