import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUserThunk } from "../../redux/auth/authSlice";
import { Button, Input } from "../Generic";
import { Content } from "../Register/style";
import * as Yup from "yup";
import { message, Spin } from "antd";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is a required field")
    .min(5, "First name must be at least 5 characters"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Enter a valid email address."),
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 6 characters"),
  changepassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
});
const Signup = ({ isSuccess }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { status, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = () => {
    messageApi.open({
      type: "error",
      content: "User with this Email address already exists.",
      duration: 2,
    });
  };

  const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        email: "",
        password: "",
        changepassword: "",
      },
      validationSchema,
      onSubmit(values) {
        dispatch(
          registerUserThunk({
            firstName: values.firstName,
            email: values.email,
            password: values.password,
          })
        );
      },
    });

  useEffect(() => {
    if (status === "rejected") {
      error();
    }
    if (status === "fulfilled") {
      navigate("/profile/account-details");
      isSuccess();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <Content>
      {contextHolder}
      <p>Enter your email and password to register.</p>
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
      <span>{errors.firstName && touched.firstName && errors.firstName}</span>
      <Input
        placeholder="Enter your email address"
        width={300}
        height={40}
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        values={values.email}
      />
      <span>{errors.email && touched.email && errors.email}</span>
      <Input
        placeholder="Password"
        width={300}
        height={40}
        type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        values={values.password}
      />
      <span>{errors.password && touched.password && errors.password}</span>
      <Input
        placeholder="Confirm Password"
        width={300}
        height={40}
        type="password"
        name="changepassword"
        onBlur={handleBlur}
        onChange={handleChange}
        values={values.changepassword}
      />
      <span>{errors.changepassword}</span>
      <Button type="success" width={"%"} height={45} onClick={handleSubmit}>
        {loading && <Spin />} Register
      </Button>
    </Content>
  );
};

export default Signup;
