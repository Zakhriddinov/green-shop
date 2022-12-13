import styled from "styled-components";

const Container = styled.div`
margin: 0 auto;
background: linear-gradient(97.77deg, rgba(245, 245, 245, 0.5) -23.46%, rgba(245, 245, 245, 0.5) 107.51%);
max-width: 1200px;
width: 100%;
max-height: 450px;
height: 100%;
margin-top: 12px;
margin-bottom: 46px;

.slick-dots li button{
   background: green;
   width: 8px;
   height: 8px;
   border-radius: 50%;
}
.slick-dots li{
   width: 8px;
   height: 8px;
   border-radius: 50%;
}
.ant-carousel .slick-dots li.slick-active {
    width: 8px;
    background-color: red;
}
 li.slick-active button {
    background: var(--colorGreen) !important;
    opacity: 1;
}
.ant-carousel .slick-dots-bottom {
    bottom:40px;
}

@media screen and (max-width:992px) {
   margin: 0 30px;
   width: auto;
   .ant-carousel .slick-dots-bottom {
     bottom: 10px;
   }
}
@media screen and (max-width:768px) {
   .ant-carousel .slick-dots-bottom {
     bottom: 10px;
   }
   margin-bottom: 20px;
}
`

const Wrapper = styled.div`
display: flex !important;
justify-content: space-between !important;
align-items: center !important;
padding: 40px 0 85px 40px;
@media screen and (max-width:768px){
  padding: 30px;
}
@media screen and (min-width:768px) {
   padding:30px;
}
`
Wrapper.Info = styled.div`
display: flex;
flex-direction: column;
max-width: 557px;
h3{
   font-family: 'CeraPro-Medium',sans-serif;
   font-size: 14px;
   line-height: 16px;
   letter-spacing: 0.1em;
   text-transform: uppercase;
   color: var(--colorBlack);
}
h1{
   font-family: 'CeraPro-Black',sans-serif;
   font-size: 70px;
   line-height: 70px;
   text-transform: uppercase;
   color: var(--colorBlack);
   margin: 7px 0px 5px 0;
}
p{
   font-family: 'CeraPro-Regular',sans-serif;
   font-size: 14px;
   line-height: 24px;
   color: #727272;
   margin-bottom: 44px;
}
@media screen and (max-width:768px){
 h3{
   font-size: 12px;
   line-height: 13px;
 }
 h1{
   font-size: 30px;
   line-height: 30px;
 }
  p{
   font-size: 13px;
   margin-bottom: 20px;
  }
  button{
   font-size: 14px;
   width: 100px;
   height: 30px;
  }
}
@media screen and (min-width:768px) {
   margin: 0 30px;
}
`
Wrapper.Img = styled.div`
img{
   width: 500px;
   height: 500px;
   margin-top: -100px;
}
@media screen and (max-width:992px) {
   display: none;
}
`
export { Container, Wrapper }