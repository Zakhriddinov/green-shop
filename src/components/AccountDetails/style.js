import styled from "styled-components";

const Wrapper = styled.div`
form{
   display: grid;
   grid-template-columns: repeat(2,1fr);
   gap: 30px;
   margin-top: 20px;
}
span{
   color: var(--colorRed);
}
.form-group{
   gap: 10px;
   display: flex;
   flex-direction: column;
}
.flex{
   display: flex;
   flex-direction: column;
   gap: 30px;
}
`
const MenuWrapper = styled.div``
const Label = styled.label``
export { Wrapper, MenuWrapper, Label }