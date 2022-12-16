import styled from "styled-components";

const Container = styled.div`
max-width: 1440px;
width: 100%;
margin: auto;
padding: var(--padding);
margin-bottom: 100px;
@media screen and (max-width:768px){
   padding: 0 30px;
}
`

export { Container }