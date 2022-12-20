import { Modal } from "antd";
import styled from "styled-components";

const Container = styled(Modal)`
.ant-modal-content{
   max-width: 500px !important;
   width: 100% !important;
   max-height: 656px !important;
   height: 100% !important;
   border-radius: 0;
}
.ant-btn-default,.ant-btn-primary{
   display: none;
}
.ant-modal-close{
   color: var(--colorGreen);
   :hover{
      background-color: white;
      color: var(--colorGreen);
   }
}

`

export { Container }