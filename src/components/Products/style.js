import styled from 'styled-components';
import Filter from '../../assets/icons/category.svg'
const Container = styled.div`
display: flex;
justify-content: space-between;

max-width: 1440px;
width: 100%;
margin: auto;
padding: var(--padding);
margin-bottom: 100px;
@media screen and (max-width:768px){
   padding: 0 30px;
}
`
const Wrap = styled.div`
  .sort{
      display: flex;
      align-items: center;
      justify-content: end;
      
      span{
         font-family: 'CeraPro-Regular',sans-serif;
         font-size: 15px;
         line-height: 16px;
         color: var(--colorBlack);
      }
      @media screen and (max-width:768px){
         justify-content: space-between;
         button{
            display: block;
         }
         span{
            display: none;
         }
          }
      }
   button{
      display: none;
   }
   
.wrapper{
   display: grid;
   grid-auto-flow:row;
   grid-template-columns: repeat(auto-fit,minmax(258px,1fr));
   grid-gap: 33px;
   max-width: 840px;
   width: 100%; 
   margin-top: 38px;
   @media screen and (max-width:768px){
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      grid-gap: 15px;
      margin-top: 20px;
   }
}
`
Wrap.Icon = styled(Filter)``

export { Container, Wrap }