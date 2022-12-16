import { Slider } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
max-width: 310px;
width: 100%;
display: flex;
flex-direction: column;
p{
   font-family: 'CeraPro-Regular',sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 15px;
   line-height: 40px;
   color: var(--colorBlack);
}
span{
   font-family: 'CeraPro-Bold',sans-serif;
   color: var(--colorGreen);
}
@media screen and (max-width:768px){
 display: none; 
}
`
const Content = styled.div`
background: #FBFBFB;
width: 100%;
height: 774px;
padding: 14px 24px 18px 18px;
`
Content.List = styled.div`
display: flex;
flex-direction: column;
padding-left: 12px;
margin-top: 9px;
`
Content.Title = styled.h2`
font-family: 'CeraPro-Bold',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 16px;
color: var(--colorBlack);
margin-top: ${({ top }) => top && "35px"};
`
Content.Item = styled(Link)`
display: flex;
justify-content: space-between;
text-decoration: none;
&:hover p{
   color: var(--colorGreen);
}
`
const SliderAnt = styled(Slider)`
.ant-slider-track{
   background: var(--colorGreen);
}
max-width: 210px;
.ant-slider-handle::after {
   background-color: var(--colorGreen);
   box-shadow: 0 0 0 2px #fff;
}
.ant-slider-handle:focus::after {
   background-color: var(--colorGreen);
   box-shadow: 0 0 0 2px #fff;
}
.ant-slider-handle:hover::after {
   background-color: var(--colorGreen);
   box-shadow: 0 0 0 2px #fff;
}
&:hover .ant-slider-track  {
    background-color: var(--colorGreen);
    box-shadow: 0 0 0 2px #fff;
}
&:hover .ant-slider-handle::after {
   box-shadow: 0 0 0 2px #fff;
}
.ant-slider-handle:hover .ant-tooltip-open{
   display: none;
}
`
const Advertising = styled.div`
width: 100%;
background: linear-gradient(180deg, rgba(70, 163, 88, 0.1) 0%, rgba(70, 163, 88, 0.03) 100%);
height: 468px;
.adv{
   width: 100%;
}
.supers{
  margin-left: 20px;
}
`
export { Container, Content, SliderAnt, Advertising }