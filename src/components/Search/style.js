import styled from "styled-components";

const Container = styled.div`
  @media screen and (max-width:769px) {
      display: none;
  } 
`

const MenuWrapper = styled.div`
padding: 20px;
background: white;
border: 1px solid #e6e9ec;
`
const Section = styled.div`
  display: flex;
  justify-content: start;
  gap: 5px;
`
const MobileSearch = styled.div`
  @media screen and (min-width:769px) {
      display: none;
  } 
`
export { Container, MenuWrapper, Section, MobileSearch }