import styled from "styled-components";


const getType = ({ type }) => {
   switch (type) {
      case "col72":
         return {
            fontSize: "14px",
            lineHeight: "24px"
         }
      case "size15":
         return {
            fontSize: "15px",
            lineHeight: "16px"
         }
   }
}

const Container = styled.p`
font-family: 'CeraPro-Regular',sans-serif;
font-style: normal;
font-weight: 400;
color: ${({ color }) => color && color};
${getType}
`

export { Container }