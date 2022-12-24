import React from "react";
import { Button } from "../../Generic";
import BoldText from "../../Generic/Typography/BoldText";
import Paragraph from "../../Generic/Typography/Paragraph";
import { Links, TotalContent } from "./style";

const PaymentCart = () => {
  return (
    <TotalContent>
      <BoldText type={"size18"}>Cart Totals</BoldText>
      <div className="line"></div>
      <div className="wrap">
        <Paragraph type={"size15"} color="var(--colorBlack)">
          Subtotal
        </Paragraph>
        <BoldText type={"size16"}>$ 1254</BoldText>
      </div>
      <div className="wrap">
        <Paragraph type={"size15"} color="var(--colorBlack)">
          Shiping
        </Paragraph>
        <BoldText type={"size16"}>$ 16</BoldText>
      </div>
      <div className="wrap">
        <BoldText type={"size16"}>Total</BoldText>
        <BoldText type={"size16"} style={{ color: "var(--colorGreen)" }}>
          $ 2.66258
        </BoldText>
      </div>
      <Button
        type="success"
        width={"100%"}
        height={40}
        style={{ margin: "29px 0 14px 0" }}
      >
        Proceed To Checkout
      </Button>
      <Links to="/home">Continue Shopping</Links>
    </TotalContent>
  );
};

export default PaymentCart;
