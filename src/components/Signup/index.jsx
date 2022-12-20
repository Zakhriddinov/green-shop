import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../axios";
import { Button, Input } from "../Generic";
import { Content } from "../Register/style";

const Signup = ({ isSuccess }) => {
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    });
  };
  const onSubmit = async () => {
    await instance.post("/users/register", body).then((res) => {
      if (res.data) {
        navigate("/profile");
        localStorage.setItem("token", JSON.stringify(res.data.token));
        isSuccess();
      }
    });
  };
  return (
    <Content>
      <p>Enter your email and password to register.</p>
      <Input
        placeholder="Username"
        width={300}
        height={40}
        type="text"
        name="name"
        onChange={onChange}
      />
      <Input
        placeholder="Enter your email address"
        width={300}
        height={40}
        type="email"
        name="email"
        onChange={onChange}
      />
      <Input
        placeholder="Password"
        width={300}
        height={40}
        type="password"
        name="password"
        onChange={onChange}
      />
      <Input
        placeholder="Confirm Password"
        width={300}
        height={40}
        type="password"
        name="confirmPassword"
        onChange={onChange}
      />
      <Button type="success" width={"%"} height={45} onClick={onSubmit}>
        Register
      </Button>
    </Content>
  );
};

export default Signup;
