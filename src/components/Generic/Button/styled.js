import styled from "styled-components";

const getType = ({ type }) => {
   switch (type) {
      case "success":
         return {
            background: "var(--colorGreen)",
            color: "#fff",
            border: "none",
            fontSize: "16px"
         }
      default:
         return {
            background: "#fff",
            border: "none",
            color: "white"
         }
   }
}

const getWidth = ({ width }) => {
   if (!width) return "130px";
   else if (`${width}`.includes("%")) return "100%";
   else return `${width}px`;
};

const Container = styled.button`
display: flex;
justify-content: center;
align-items: center;
border-radius: 6px;
font-family: "CeraPro-Medium",sans-serif;
cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

height: ${({ height }) => (height ? `${height}px` : "44px")};
width: ${getWidth};
outline: none;
${getType}

img{
   margin-right:6px;
}
`




export { Container }