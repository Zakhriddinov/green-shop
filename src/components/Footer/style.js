import { Link } from "react-router-dom";
import styled from "styled-components";
import Map from '../../assets/icons/map.svg'
import Mail from '../../assets/icons/mail.svg'
import Phone from '../../assets/icons/phone.svg'
import Facebook from '../../assets/icons/facebook.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Twitter from '../../assets/icons/twitter.svg'
import Linkedin from '../../assets/icons/linkedin.svg'

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
   margin-bottom:60px;
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
justify-content: space-between;
padding:33px 155px 29px 23px;
border-bottom: 1px solid rgba(70, 163, 88, 0.2);
@media screen and (max-width:768px){
   padding: 30px;
   flex-wrap: wrap;
   height: 100%;
   gap: 10px;
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
flex-wrap: wrap;
padding: 0px 267px 0 23px;
@media screen and (max-width:960px){
   padding: 30px;
   height: 100%;
   gap: 4px;
}
`
Wrapper.Top = styled.div`
height: 250px;
padding: 25px 25px 24px 23px;
display: flex;
justify-content: space-between;
@media screen and (max-width:960px){
   padding: 30px;
   height: 100%;
   flex-wrap: wrap;
   gap: 30px;
   display: flex;
   text-align: center;
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
   @media screen and (max-width:960px){
  margin: 0 auto;
}
   img{
      margin-top: -15px;
      margin-left: 10px;
   }
}
.wrap{
   display: flex;
   gap: 10px;
   margin: 5px 0px 33px 0;
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
Content.Link = styled.a`
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border: 1px solid rgba(70, 163, 88, 0.2);
border-radius: 4px;
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
Icon.Facebook = styled(Facebook)``
Icon.Instagram = styled(Instagram)``
Icon.Twitter = styled(Twitter)``
Icon.Linkedin = styled(Linkedin)``

export { Container, Wrapper, Content, Info, Icon, Line }