import { Button, Input } from "../Generic";
import BoldText from "../Generic/Typography/BoldText";
import Paragraph from "../Generic/Typography/Paragraph";
import { MenuWrapper, Wrapper } from "./style";
import UploadImage from "./Upload";

const AccountDetails = () => {
  return (
    <Wrapper>
      <MenuWrapper>
        <BoldText type="size16">Personal Information</BoldText>
      </MenuWrapper>
      <form>
        <div className="form-group">
          <Paragraph type="col72">
            First Name <span>*</span>
          </Paragraph>
          <Input name="firstName" type="text" width={417} />
        </div>
        <div className="form-group">
          <Paragraph type="col72">
            Last Name <span>*</span>
          </Paragraph>
          <Input name="lastName" type="text" width={417} />
        </div>
        <div className="form-group">
          <Paragraph type="col72">
            Email address <span>*</span>
          </Paragraph>
          <Input name="email" disabled type="email" width={417} />
        </div>
        <div className="form-group">
          <Paragraph type="col72">
            Phone Number <span>*</span>
          </Paragraph>
          <Input name="phone" type="number" width={417} />
        </div>
        <div className="form-group">
          <Paragraph type="col72">
            Country / Region <span>*</span>
          </Paragraph>
          <Input name="country" type="text" width={417} />
        </div>
        <div className="form-group">
          <Paragraph type="col72">
            Town / City <span>*</span>
          </Paragraph>
          <Input name="city" type="text" width={417} />
        </div>
        <div className="form-group">
          <Paragraph type="col72">
            Address / City <span>*</span>
          </Paragraph>
          <Input name="address" type="text" width={417} />
        </div>
        <div className="form-group">
          <Paragraph type="col72">
            State <span>*</span>
          </Paragraph>
          <Input name="state" type="text" width={417} />
        </div>
        <div className="form-group">
          <Paragraph type="col72">
            Zip Code <span>*</span>
          </Paragraph>
          <Input name="zipCode" type="number" width={417} />
        </div>
        <UploadImage />

        <div className="flex">
          <div className="form-group">
            <Paragraph type="col72">
              New Password <span>*</span>
            </Paragraph>
            <Input name="password" type="password" width={417} />
          </div>
          <div className="form-group">
            <Paragraph type="col72">
              Confirm new password <span>*</span>
            </Paragraph>
            <Input name="confirmPassword" type="password" width={417} />
          </div>
          <Button type={"success"} width={131} height={40}>
            Save Change
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default AccountDetails;
