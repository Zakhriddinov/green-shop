import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../redux/cart/cartSlice";
import Carousel from "../Carousel";
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

  return (
    <Container>
      <Wrapper>
        <FavouritesTable product={orderItems} />
        <PaymentCart totalPrice={totalPrice} />
      </Wrapper>
      <Carousel text="You may be interested in" />
    </Container>
  );
};

export default Cart;
