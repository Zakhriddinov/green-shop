import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../axios";
import { Button } from "../Generic";
import Input from "../Generic/Input";
import { Content } from "../Register/style";

const Signin = ({ isSuccess }) => {
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    await instance.post("/users/login", body).then((res) => {
      if (res.data) {
        navigate("/profile");
        localStorage.setItem("token", JSON.stringify(res.data.token));
        isSuccess();
      }
    });
  };
  
  return (
    <Content>
      <p>Enter your username and password to login.</p>
      <Input
        placeholder="almamun_uxui@outlook.com"
        width={300}
        height={40}
        type="email"
        name="email"
        onChange={onChange}
      />
      <Input
        placeholder="password"
        width={300}
        height={40}
        type="password"
        name="password"
        onChange={onChange}
      />
      <Button type="success" width={"%"} height={45} onClick={onSubmit}>
        Login
      </Button>
    </Content>
  );
};

export default Signin;
