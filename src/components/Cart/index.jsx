import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../redux/cart/cartSlice";
import FavouritesTable from "../Generic/FavouritesTable";
import { Container, Wrapper } from "./style";
import PaymentCart from "./TotalContent";

const Cart = () => {
  const { orderItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(totalPrice);

  return (
    <Container>
      <Wrapper>
        <FavouritesTable product={orderItems} />
        <PaymentCart />
      </Wrapper>
    </Container>
  );
};

export default Cart;
