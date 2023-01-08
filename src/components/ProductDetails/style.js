import styled from "styled-components";

const Container = styled.div`
max-width: 1200px;
width: 100%;
margin: 45px auto 28px auto;

@media screen and (max-width:768px){
   margin: 0px 30px;
}
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
@media screen and (max-width:768px){
   flex-direction: column;
}
`

export { Container, Wrapper }