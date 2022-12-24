import { Tabs } from "antd"
import styled from "styled-components"


const Container = styled.div`
display: flex;
margin-top: 94px;
margin-bottom: 127px;
.ant-tabs-tab-btn{
   font-family: "CeraPro-Medium",sans-serif;
   font-style: normal;
   font-weight: 500;
   font-size: 17px;
   line-height: 16px;
   color: var(--colorBlack);
}
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
   color: var(--colorGreen);
}
.ant-tabs-ink-bar ,.ant-tabs-ink-bar-animated{
   background-color: var(--colorGreen);
}
@media screen and (max-width:768px){
   width: 100%;
   padding-right:30px;
}
`
const AntTabs = styled(Tabs)``

export { Container, AntTabs }
