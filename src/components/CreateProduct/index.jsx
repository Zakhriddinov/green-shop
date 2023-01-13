import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import BoldText from "../Generic/Typography/BoldText";
import Textarea from "../Generic/Textarea";
import { Container } from "./style";

const CreateProducts = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="flex">
        <Button
          type={"success"}
          width={60}
          height={30}
          onClick={() => navigate("/admin/products")}
        >
          Back
        </Button>
        <BoldText type={"size18"}>Add a new product</BoldText>
      </div>
      <Input
        placeholder="Title"
        width={500}
        height={40}
        type="text"
        name="firstName"
      />
      <Textarea />
      <Input
        placeholder="Count in stock"
        width={500}
        height={40}
        type="number"
        name="count"
      />
      <Input
        placeholder="Price"
        width={500}
        height={40}
        type="number"
        name="price"
      />
      <Button type={"success"} width={100} height={40}>Create</Button>
    </Container>
  );
};

export default CreateProducts;
