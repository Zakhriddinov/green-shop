import styled from "styled-components";

const Container = styled.textarea`
display: flex;
justify-content: center;
align-items: center;
border-radius: 3px;
min-width: 100px;

font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : "14px"};
outline:none;
border: 1px solid var(--colorSilver-ae);
height:${({ height }) => height ? `${height}px` : "100px"};
width:${({ width }) => width ? `${width}px` : "100%"};
padding:13px;
font-family:'CeraPro-Regular',sans-serif;
color:var(--colorGreen);
letter-spacing:1.1px;
:focus{
   border: 1px solid var(--colorGreen);
}
::placeholder{
   color:#a5a5a5;
}
`

export { Container }