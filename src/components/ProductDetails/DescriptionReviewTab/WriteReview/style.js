import { Select } from "antd";
import styled from "styled-components";
import User from "../../../../assets/icons/user.svg"
const Container = styled.div`
width: 1200px;
.buttonStyle{
   display: flex;
   justify-content: end;
   margin-bottom: 20px;
}
`
const Wrapper = styled.div`
border-bottom:0.3px solid rgba(70, 163, 88, 0.5);
padding: 15px 0px;
`
const UserInfo = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 15px 15px;
.left{
   display: flex;
}
.img{
   width: 40px;
   height: 40px;
   background-color: #a5a5a5;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 12px;
}
`
UserInfo.Icon = styled(User)`
svg,path{
   fill: white;
}`

const SelectAnt = styled(Select)`
max-width: 170px;
width: 100%;
  .ant-select-selector {
    height: 20px !important;
    border: none !important;
    font-family: "CeraPro-Regular",sans-serif;
  }
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
   }
   @media screen and (max-width:768px){
        max-width: 140px;
        .ant-select-selector {
          border: none !important;
          font-family: "CeraPro-Regular",sans-serif;
          font-size: 15px;
        }
        .ant-select-selection-item {
          display: flex !important;
          align-items: center !important;
        }
  }
`
export { Container, Wrapper, UserInfo, SelectAnt }