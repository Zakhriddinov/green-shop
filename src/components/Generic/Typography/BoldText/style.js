import styled from "styled-components";


const getType = ({ type }) => {
   switch (type) {
      case "size14":
         return {
            fontSize: "14px",
            linHeight: "24px",
            color: "#3D3D3D"
         }
      case "size18":
         return {
            fontSize: "18px",
            linHeight: "16px",
            color: "#3D3D3D"
         }
      case "size16":
         return {
            fontSize: "16px",
            linHeight: "16px",
            color: "#3D3D3D"
         }
   }
}
const Container = styled.h2`
font-family: 'CeraPro-Bold',sans-serif;
font-style: normal;
font-weight: 700;
${getType}
`

export { Container }