import { Link } from "react-router-dom";
import styled from "styled-components";
import Map from '../../assets/icons/map.svg'
import Mail from '../../assets/icons/mail.svg'
import Phone from '../../assets/icons/phone.svg'
const Container = styled.div`
display: flex;
flex-direction: column;
background-color: #fbfbfb;
height: 610px;
max-width: 1200px;
width: 100%;
margin: 0 auto;

@media screen and (max-width:768px) {
   height: 100%;   
}
.input{
   margin-left: 62px;
   @media screen and (max-width:768px) {
   margin: 0;
}
   input{
      margin: 18px 0;
   }
}
`
const Wrapper = styled.div``
Wrapper.Bottom = styled.div`
height: 236px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding:33px 155px 29px 23px;
border-bottom: 1px solid rgba(70, 163, 88, 0.2);
@media screen and (max-width:768px){
   padding: 0;
   flex-wrap: wrap;
   height: 100%;
}
`
Wrapper.Center = styled.div`
height: 88px;
background: rgba(70, 163, 88, 0.1);
border-bottom: 1px solid rgba(70, 163, 88, 0.2);
border-top: 1px solid rgba(70, 163, 88, 0.2);
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 267px 0 23px;
@media screen and (max-width:768px){
   padding: 0;
   height: 100%;
   flex-wrap: wrap;
}
`
Wrapper.Top = styled.div`
height: 250px;
padding: 25px 25px 24px 23px;
display: flex;
justify-content: space-between;
@media screen and (max-width:768px){
   padding: 0;
   height: 100%;
   flex-wrap: wrap;
}
`
Wrapper.Info = styled.div`
background-color: white;
text-align: center;
height: 40px;
padding: 7px 0px 13px 0;
`

const Content = styled.div`
display: flex;
flex-direction: column;
.circle{
   width: 74px;
   height: 74px;
   background: rgba(70, 163, 88, 0.13);
   border-radius: 50%;
   margin-bottom: 15px;
   img{
      margin-top: -15px;
      margin-left: 10px;
   }
}
`
Content.Title = styled.h2`
font-family: 'CeraPro-Bold',sans-serif;
font-size: 18px;
line-height: 16px;
color: var(--colorBlack);
margin-bottom: 9px;
`
Content.Item = styled(Link)`
font-family: 'CeraPro-Regular',sans-serif;
font-size: 14px;
line-height: 30px;
color: var(--colorBlack);
text-decoration: none;
`
const Info = styled.div`
display: flex;
align-items: center;
`
Info.Item = styled.p`
font-family: 'CeraPro-Regular',sans-serif;
font-size: 14px;
line-height: 22px;
color: var(--colorBlack);
`
const Line = styled.div`
width: 1px;
height: 187px;
margin: 0 34px;

background: rgba(70, 163, 88, 0.1);

@media screen and (max-width:768px) {
   display: none;
}
`
const Icon = styled.div``

Icon.Map = styled(Map)`
margin-right: 12px;
`
Icon.Phone = styled(Phone)`
margin-right: 12px;
`
Icon.Mail = styled(Mail)`
margin-right: 12px;
`
export { Container, Wrapper, Content, Info, Icon, Line }