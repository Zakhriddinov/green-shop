import { useSelector } from "react-redux";
import FavouritesTable from "../Generic/FavouritesTable";
import { Container, Wrapper } from "./style";
import PaymentCart from "./TotalContent";

const Cart = () => {
  const { orderItems } = useSelector((state) => state.cart);
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
