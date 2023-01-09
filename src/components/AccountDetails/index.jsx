import { Input } from "../Generic";
import BoldText from "../Generic/Typography/BoldText";
import Paragraph from "../Generic/Typography/Paragraph";
import { MenuWrapper, Wrapper } from "./style";

const AccountDetails = () => {
  return (
    <Wrapper>
      <MenuWrapper>
        <BoldText type="size16">Personal Information</BoldText>
      </MenuWrapper>
      <form>
        <div className="form-group">
          <Paragraph size="15px">
            First Name <span>*</span>
          </Paragraph>
          <Input name="firstName" type="text" width={417} />
        </div>
        <div className="form-group">
          <Paragraph size="15px">
            Last Name <span>*</span>
          </Paragraph>
          <Input name="lastName" type="text" width={417} />
        </div>
        <div className="form-group">
          <Paragraph size="15px">
            Email address <span>*</span>
          </Paragraph>
          <Input name="email" type="email" width={417} />
        </div>
        <div className="form-group">
          <Paragraph size="15px">
            Phone Number <span>*</span>
          </Paragraph>
          <Input name="phone" type="number" width={417} />
        </div>
      </form>
    </Wrapper>
  );
};

export default AccountDetails;
