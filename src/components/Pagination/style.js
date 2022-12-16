import { Pagination } from "antd";
import styled from "styled-components";

const Container = styled.div`
display: flex;
justify-content: end;
margin-top: 60px;
.ant-pagination-item{
   border: 1px solid #E5E5E5;
   border-radius: 4px;
   font-family: "CeraPro-Regular",sans-serif;
   font-size: 18px;
}
.ant-pagination-prev{
   border: 1px solid #E5E5E5;
   border-radius: 4px;
   font-family: "CeraPro-Regular",sans-serif;
   font-size: 18px;
}
.ant-pagination-next{
   border: 1px solid #E5E5E5;
   border-radius: 4px;
   font-family: "CeraPro-Regular",sans-serif;
   font-size: 18px;
}
.ant-pagination-options{
   display: none;
}
.ant-pagination-item-active{
   background-color: var(--colorGreen) !important;
   border: none;
   a{
      color: #fff;
      
      &:hover{
         color: #fff !important;
      }
   }
}
@media screen and (max-width:768px){
   justify-content: center;
}
`
const PaginationAnt = styled(Pagination)``
export { Container, PaginationAnt }