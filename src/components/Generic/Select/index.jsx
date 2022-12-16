import React from "react";
import { SelectAnt } from "./style";

const style = {
  fontFamily: "CeraPro-Regular",
};
const Select = () => {
  return (
    <SelectAnt defaultValue={"Default sorting"} bordered={false}>
      <SelectAnt.Option style={style}>Default sorting</SelectAnt.Option>
      <SelectAnt.Option style={style} value="price_1">
        Price: Low To High
      </SelectAnt.Option>
      <SelectAnt.Option style={style} value="price_-1">
        Price: High To Low
      </SelectAnt.Option>
      <SelectAnt.Option style={style} value="rating_-1">
        Customer Rating
      </SelectAnt.Option>
      <SelectAnt.Option style={style} value="name_1">
        Name A-Z
      </SelectAnt.Option>
      <SelectAnt.Option style={style} value="name_-1">
        Name Z-A
      </SelectAnt.Option>
    </SelectAnt>
  );
};

export default Select;
