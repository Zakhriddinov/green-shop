import styled from "styled-components";

const Container = styled.input`
display: flex;
justify-content: center;
align-items: center;
border-radius: 3px;
min-width: 300px;

font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : "14px"};
outline:none;
border: 1px solid var(--colorSilver-ae);
height:${({ height }) => height ? `${height}px` : "40px"};
width:${({ width }) => width ? `${width}px` : "100%"};
padding:${({ icon }) => icon ? '0px 35px' : '0px 13px'};
font-family:'CeraPro-Regular',sans-serif;
color:var(--colorGreen);
:focus{
   border: 1px solid var(--colorGreen);
}
::placeholder{
   color:#a5a5a5;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
align-items: center;
width: ${({ width }) => (width ? `${width}px` : '100%')};
`

const Icon = styled.div`
position: absolute;
transform: translate(-50%, -50%);
left: 20px;
top: 50%;
`

export { Container, Wrapper, Icon }