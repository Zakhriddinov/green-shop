import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import BoldText from "../Generic/Typography/BoldText";
import Textarea from "../Generic/Textarea";
import { Container } from "./style";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  title: Yup.string()
    .required("Title is a required field")
    .min(6, "Title must be at least 6 characters"),
  description: Yup.string()
    .required("Description is a required field")
    .min(15, "Description must be at least 15 characters"),
  price: Yup.number()
    .required("Price is a required field")
    .min(3, "Price must be at least 3 characters"),
  count: Yup.number().required("Price is a required field"),
  category: Yup.string().required("Category is a required field"),
  tags: Yup.array(),
  size: Yup.array(),
});

const CreateProducts = () => {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        title: "",
        description: "",
        price: 0,
        count: 0,
        category: "",
        tags: [],
        size: [],
        images: [],
      },
      validationSchema,
      onSubmit(values) {
        console.log(values);
      },
    });
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
        name="title"
        onChange={handleChange}
        onBlur={handleBlur}
        values={values.email}
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
      <Button type={"success"} width={100} height={40} onClick={handleSubmit}>
        Create
      </Button>
    </Container>
  );
};

export default CreateProducts;
