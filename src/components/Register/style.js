import { Modal, Tabs } from "antd";
import styled from "styled-components";

const ModalAnt = styled(Modal)`
.ant-modal-content{
   max-width: 500px !important;
   width: 100% !important;
   max-height: 656px !important;
   height: 100% !important;
   border-radius: 0;
   border-bottom: 10px solid var(--colorGreen);
}
.ant-btn-default,.ant-btn-primary{
   display: none;
}
.ant-modal-close{
   color: var(--colorGreen);
   :hover{
      background-color: white;
      color: var(--colorGreen);
   }
}
`
const Container = styled.div`
display: flex;
justify-content: center;

.ant-tabs-tab{
   margin: 40px 0px;
}
.ant-tabs-tab-btn{
   font-family: "CeraPro-Medium",sans-serif;
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 16px;
   color: var(--colorBlack);
}
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
   color: var(--colorGreen);
}
.ant-tabs-ink-bar ,.ant-tabs-ink-bar-animated{
   display: none;
}
`
const AntTabs = styled(Tabs)``

const Content = styled.div`
display: flex;
flex-direction: column;
span{
   font-family: "CeraPro-Regular",sans-serif;
   font-size: 13px;
   color: red;
   margin-top: 5px;
}
p{
   font-family: 'CeraPro-Regular',sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 13px;
   line-height: 16px;
   color: var(--colorBlack);
}
button{
   margin: 30px 0;
}
input{
   max-width: 300px;
   width: 100%;
   max-height: 40px;
   height: 100%;
   border: 1px solid #EAEAEA;
   border-radius: 5px;
   
   font-family: "CeraPro-Regular",sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #A5A5A5;
   padding: 12px;
   outline: none;
   margin-top: 17px;
   &:focus{
      border: 1px solid #46A358 !important;
   }
}
`

export { ModalAnt, Container, AntTabs, Content }