import { Link } from "react-router-dom";
import styled from "styled-components";


const TotalContent = styled.div`
max-width: 328px;
width: 100%;
margin-left: 86px;
margin-top: 18px;
position: sticky;
top: 0;
.line{
   width: 100%;
   height: 0.3px;
   background-color: rgba(70, 163, 88, 0.5);
   margin: 18px 0;
}
.wrap{
   display: flex;
   justify-content: space-between;
   margin:15px 0px;
}
`
const Links = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-family: 'CeraPro-Regular',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 16px;
color: var(--colorGreen);
text-decoration: none;
`
export { TotalContent, Links }