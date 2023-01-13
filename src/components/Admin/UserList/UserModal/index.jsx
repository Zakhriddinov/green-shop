import { Checkbox } from "antd";
import { Button, Input } from "../../../Generic";
import BoldText from "../../../Generic/Typography/BoldText";
import { ModalAnt } from "../../../Register/style";
import { Container } from "../style";
import { Wrapper } from "./style";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { editUser } from "../../../../redux/admin/adminUserSlice";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is a required field")
    .min(5, "First name must be at least 5 characters"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Enter a valid email address."),
});

const UserModal = ({
  isModalOpen = true,
  handleOk,
  handleCancel,
  setIsModalOpen,
  id,
}) => {
  const isSuccess = () => setIsModalOpen(false);
  const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        email: "",
      },
      validationSchema,
      onSubmit(values) {
        console.log(values);
      },
    });
  return (
    <ModalAnt open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Container>
        <Wrapper>
          <BoldText type="size18">User Edit</BoldText>
          <Input
            placeholder="Username"
            width={300}
            height={40}
            type="text"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.firstName}
          />
          <p>{errors.firstName && touched.firstName && errors.firstName}</p>
          <Input
            placeholder="almamun_uxui@outlook.com"
            width={300}
            height={40}
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.email}
          />
          <p>{errors.email && touched.email && errors.email}</p>
          <Checkbox>is Admin</Checkbox>
          <Button type={"success"} width={"100%"} onClick={handleSubmit}>
            Update
          </Button>
        </Wrapper>
      </Container>
    </ModalAnt>
  );
};

export default UserModal;
