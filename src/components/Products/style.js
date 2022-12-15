import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-between;

max-width: 1440px;
width: 100%;
margin: auto;
padding: var(--padding);
margin-bottom: 100px;
`
const Wrap = styled.div`
display: grid;
grid-auto-flow:row;
grid-template-columns: repeat(auto-fit,minmax(258px,1fr));
grid-gap: 33px;
max-width: 840px;
width: 100%;
`

export { Container, Wrap }