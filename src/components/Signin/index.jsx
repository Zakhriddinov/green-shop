import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUserThunk } from "../../redux/auth/authSlice";
import { Button } from "../Generic";
import Input from "../Generic/Input";
import { Content } from "../Register/style";
import * as Yup from "yup";
import { message, Spin } from "antd";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is a required field")
    .email("Enter a valid email address."),
  password: Yup.string()
    .required("Password is a required field")
    .min(6, "Password must be at least 6 characters")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
});

const Signin = ({ isSuccess }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { status, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit(values) {
        dispatch(loginUserThunk(values));
      },
    });

  const error = () => {
    messageApi.open({
      type: "error",
      content: "User with this Email address already exists.",
      duration: 2,
    });
  };

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
      <p>Enter your username and password to login.</p>
      <Input
        placeholder="almamun_uxui@outlook.com"
        width={300}
        height={40}
        type="email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        values={values.emailz}
      />
      <span>{errors.email && touched.email && errors.email}</span>
      <Input
        placeholder="password"
        width={300}
        height={40}
        type="password"
        name="password"
        onChange={handleChange}
        values={values.password}
        onBlur={handleBlur}
      />
      <span>{errors.password && touched.password && errors.password}</span>

      <Button type="success" width={"%"} height={45} onClick={handleSubmit}>
        {loading && <Spin />}
        Login
      </Button>
    </Content>
  );
};

export default Signin;
