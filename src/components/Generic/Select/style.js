import { Select } from "antd";
import styled from "styled-components";


const SelectAnt = styled(Select)`
max-width: 170px;
width: 100%;
  .ant-select-selector {
    height: 20px !important;
    border: none !important;
    font-family: "CeraPro-Regular",sans-serif;
  }
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
   }
`

export { SelectAnt }