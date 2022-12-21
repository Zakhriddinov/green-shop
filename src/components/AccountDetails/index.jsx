import BoldText from "../Generic/Typography/BoldText";
import { MenuWrapper, Wrapper } from "./style";

const AccountDetails = () => {
  return (
    <Wrapper>
      <form>
        <MenuWrapper>
          <BoldText type="size16">Personal Information</BoldText>
        </MenuWrapper>
      </form>
    </Wrapper>
  );
};

export default AccountDetails;
