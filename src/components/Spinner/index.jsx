import { Spin } from "antd";
import styled from "styled-components";
const Spinner = () => <Container size="large"/>;
export default Spinner;

const Container = styled(Spin)`
   color: var(--colorGreen) ;
   margin: 100px auto;
`;
