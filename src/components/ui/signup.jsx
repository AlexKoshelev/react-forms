import React, { useRef, useState } from "react";
import FormWrapper from "../common/form-wrapper";
import TextField from "../common/form/text-field";
import { NavLink } from "react-router-dom";
import Button from "../common/button";

const Signup = ({ handleSubmit }) => {
  const refSignup = useRef(null);
  const [data, setData] = useState({
    name: "",
    nicname: "",
    email: "",
    nickname: "",
    gender: "",
    password: "",
    rapidPassword: "",
  });
  const handleChange = (e) => {
    setData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  const handleReset = () => {
    setData({
      name: "",
      nicname: "",
      email: "",
      nickname: "",
      gender: "",
      password: "",
      rapidPassword: "",
    });
  };
  return (
    <FormWrapper title={"Форма регистрации"}>
      <form
        ref={refSignup}
        onSubmit={(e) => handleSubmit(e, data, refSignup)}
        onChange={handleChange}
        onReset={handleReset}
      >
        <TextField
          type="text"
          name={"name"}
          placeholder={"Введите имя"}
          label={"Укажите имя"}
          borderRadius={"2px"}
          isRequired={true}
          componentStyle={true}
        />
        <TextField
          type="text"
          name="nickname"
          placeholder={"Введите ник"}
          label={"Укажите ник"}
          borderRadius={"2px"}
          componentStyle={true}
        />
        <TextField
          type="email"
          name="email"
          placeholder={"Введите почту"}
          label={"Укажите почту"}
          borderRadius={"2px"}
          isRequired={true}
          componentStyle={true}
        />
        <TextField
          type="radio"
          label={"Мужской"}
          value={"male"}
          name={"gender"}
          borderRadius={"2px"}
          componentStyle={true}
        />
        <TextField
          type="radio"
          label={"Женский"}
          value={"femail"}
          borderRadius={"2px"}
          name={"gender"}
          componentStyle={true}
        />
        <TextField
          type="password"
          name="password"
          placeholder={"Введите пароль"}
          label={"Укажите пароль"}
          borderRadius={"2px"}
          isRequired={true}
          componentStyle={true}
        />
        <TextField
          type="password"
          name="rapidPassword"
          placeholder={"Повторите пароль"}
          label={"Повторите пароль"}
          description={"Пароли должны быть одинаковыми"}
          isRequired={true}
        />
        <NavLink to="/">Войти</NavLink>
        <Button type={"submit"}>Зарегистрироваться</Button>
      </form>
    </FormWrapper>
  );
};
export default Signup;
