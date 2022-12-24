import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../../../redux/cart/cartSlice";
import Button from "../Button";
import BoldText from "../Typography/BoldText";
import Paragraph from "../Typography/Paragraph";
import { Container, Icon, Tbody, Thead } from "./style";

const FavouritesTable = ({ product = {} }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDescreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  return (
    <Container>
      <Thead>
        <tr>
          <th>Products</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
        </tr>
      </Thead>
      <Tbody>
        {product?.map((value, index) => (
          <tr key={index}>
            <td>
              <img src={value.images} alt="" />
              <div className="title">
                <BoldText type="size16">{value.title}</BoldText>
                <Paragraph type="col72" color="#A5A5A5">
                  SKU: {value.productId}
                </Paragraph>
              </div>
            </td>
            <td>
              <Paragraph type="size15" color="#727272">
                $ {value.price}
              </Paragraph>
            </td>
            <td>
              <div className="flex">
                <Button
                  type={"success"}
                  width={21}
                  height={25}
                  size
                  onClick={() => handleDescreaseCart(value)}
                >
                  -
                </Button>
                <Paragraph type="size15" color={"var(--colorBlack)"}>
                  {value.quantity}
                </Paragraph>
                <Button
                  type={"success"}
                  width={21}
                  height={25}
                  size
                  onClick={() => handleAddToCart(value)}
                  disabled={product.count === value.quantity}
                >
                  +
                </Button>
              </div>
            </td>
            <td>
              {" "}
              <BoldText type={"size16"} style={{ color: "var(--colorGreen)" }}>
                ${value.itemTotal}
              </BoldText>
            </td>
            <td>
              <Icon.Delete onClick={() => dispatch(removeFromCart(value))} />
            </td>
          </tr>
        ))}
      </Tbody>
    </Container>
  );
};

export default FavouritesTable;
