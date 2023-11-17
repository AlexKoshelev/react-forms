import React, { useEffect, useRef, useState } from "react";
import FormWrapper from "../common/form-wrapper";
import TextField from "../common/form/text-field";
import { NavLink } from "react-router-dom";
import Button from "../common/button";

const Signup = ({ handleSubmit }) => {
  const refSignup = useRef(null);
  const refInputName = useRef(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    nickname: "",
    gender: "",
    password: "",
    rapidPassword: "",
  });
  useEffect(() => {
    refInputName.current.focus();
  }, []);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setError(null);
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
  const getError = () => {
    if (data.password !== data.rapidPassword) {
      setError("Пароли не совпадают");
    } else {
      return null;
    }
  };
  return (
    <FormWrapper title={"Форма регистрации"}>
      <form
        ref={refSignup}
        onSubmit={(e) => handleSubmit(e, data, refSignup, getError)}
        onChange={handleChange}
        onReset={handleReset}
      >
        <TextField
          inputRef={refInputName}
          type="text"
          name={"name"}
          placeholder={"Введите имя"}
          label={"Укажите имя"}
          borderRadius={"2px"}
          autoComplete={"username"}
          isRequired={true}
          componentStyle={true}
        />
        <TextField
          type="text"
          name="nickname"
          placeholder={"Введите ник"}
          autoComplete={"nickname"}
          label={"Укажите ник"}
          borderRadius={"2px"}
          componentStyle={true}
          disabled={true}
        />
        <TextField
          type="email"
          name="email"
          placeholder={"Введите почту"}
          label={"Укажите почту"}
          autoComplete={"email"}
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
          autoComplete={"sex"}
          borderRadius={"2px"}
          name={"gender"}
          componentStyle={true}
        />
        <TextField
          type="password"
          name="password"
          autoComplete={"sex"}
          autocomplete="current-password"
          placeholder={"Введите пароль"}
          label={"Укажите пароль"}
          borderRadius={"2px"}
          isRequired={true}
          componentStyle={true}
        />
        <TextField
          type="password"
          name="rapidPassword"
          autocomplete="current-password"
          placeholder={"Повторите пароль"}
          label={"Повторите пароль"}
          description={"Пароли должны быть одинаковыми"}
          isRequired={true}
          error={error}
        />
        <NavLink to="/">Войти</NavLink>
        <Button type={"submit"}>Зарегистрироваться</Button>
      </form>
    </FormWrapper>
  );
};
export default Signup;
