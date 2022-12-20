import styled from "styled-components";
import Heart from '../../../assets/icons/heart.svg';
import Facebook from '../../../assets/icons/facebook.svg';
import Twitter from '../../../assets/icons/twitter.svg';
import Instagram from '../../../assets/icons/instagram.svg';
import Linkedin from '../../../assets/icons/linkedin.svg';

const Content = styled.div`
max-width: 573px;
width: 100%;
@media screen and (max-width:768px){
   width: 100%;
   padding-right: 30px;
}
`
Content.Title = styled.h3`
font-family: 'CeraPro-Bold',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 16px;
color: var(--colorBlack);
`
Content.Header = styled.div`
border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
display: flex;
justify-content: space-between;
padding: 21px 0px 13px 0px;
margin-bottom: 15px;
.price{
   font-family: 'CeraPro-Bold',sans-serif;
   font-style: normal;
   font-weight: 700;
   font-size: 22px;
   line-height: 16px;
   color: var(--colorGreen);
}
`
Content.Info = styled.div`
.size{
   display: flex;
   align-items: center;
   gap: 10px;
   margin-bottom: 20px;
}
h3{
   font-family: 'CeraPro-Medium',sans-serif;
   font-style: normal;
   font-weight: 500;
   font-size: 15px;
   line-height: 16px;
   color: var(--colorBlack);
   margin-bottom: 11px;
}
.info{
   margin-top: 23px;
   margin-bottom: 18px;
}
`
const Icon = styled.div``
Icon.Heart = styled(Heart)`
svg,path{
   fill: var(--colorGreen);
}
`
Icon.Facebook = styled(Facebook)`
svg,path{
   fill: var(--colorBlack);
}
`
Icon.Twitter = styled(Twitter)`
svg,path{
   fill: var(--colorBlack);
}
`
Icon.Linkedin = styled(Linkedin)`
svg,path{
   fill: var(--colorBlack);
}
`
Icon.Instagram = styled(Instagram)`
svg,path{
   fill: var(--colorBlack);
}
`

export { Content, Icon }