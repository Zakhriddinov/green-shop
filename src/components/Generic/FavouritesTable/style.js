import styled from "styled-components";
import Delete from '../../../assets/icons/delete.svg'
const Container = styled.table`
width: 100%;
height: 100%;
border-spacing: 0px;
`
const Thead = styled.thead`
tr,th{
   text-align: justify;
   font-family: "CeraPro-Medium",sans-serif;
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 16px;
   color: var(--colorBlack);
   height: 60px;
   border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
}
`
const Tbody = styled.tbody`
tr{
   background: #FBFBFB;
   height: 50px;
}
td{
   padding: 5px;
   border-top: 5px solid white;
   border-bottom: 5px solid white;
}
td:nth-child(1){
   display: flex;
   align-items: center;
   img{
      width: 70px;
      height: 60px;
      margin-right: 10px;
   }
}
.title{
   display: flex;
   flex-direction: column;
}
.flex{
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
}
`

const Icon = styled.div``
Icon.Delete = styled(Delete)`
cursor: pointer;
`

export { Container, Thead, Tbody, Icon }