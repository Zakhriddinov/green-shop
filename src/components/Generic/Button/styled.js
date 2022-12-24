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
      case "dark":
         return {
            background: "var(--colorGreen)",
            border: "none",
            borderRadius: "50%"
         }
      case "category":
         return {
            background: "white",
            border: "none",
         }
      case "size":
         return {
            borderRadius: "50%",
            border: "1px solid #EAEAEA",
            color: "#727272",
            fontSize: "14px",
            background: "#fff"
         }
      case "outline-cart":
         return {
            border: "1px solid #46A358",
            background: "#fff",
            color: "var(--colorGreen)",
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
border-radius: ${({ size }) => size ? "18px" : "6px"};
font-family: "CeraPro-Medium",sans-serif;
cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
height: ${({ height }) => (height ? `${height}px` : "44px")};
width: ${getWidth};
outline: none;
:disabled{
   opacity:0.5;
}
${getType}

.ant-spin .ant-spin-dot-item{
   background-color:white;
   opacity:1;
}
.ant-spin{
   margin-right:10px;
}
`




export { Container }