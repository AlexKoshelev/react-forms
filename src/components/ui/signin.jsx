import React, { useEffect, useRef, useState } from "react";
import TextField from "../common/form/text-field";
import FormWrapper from "../common/form-wrapper";
import { NavLink } from "react-router-dom";
import Button from "../common/button";
const Signin = ({ handleSubmit }) => {
  const refSignin = useRef(null);
  const refInputEmail = useRef(null);
  const [data, setData] = useState({ email: "", password: "" });
  useEffect(() => {
    if (refInputEmail.current) refInputEmail.current.focus();
  }, []);
  const handleChange = (e) => {
    setData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  const handleReset = () => {
    setData({ email: "", password: "" });
  };
  return (
    <>
      <FormWrapper title={"Форма авторизации"}>
        <form
          ref={refSignin}
          onSubmit={(e) => handleSubmit(e, data, refSignin)}
          onChange={handleChange}
          onReset={handleReset}
        >
          <TextField
            inputRef={refInputEmail}
            type="email"
            name="email"
            placeholder={"Введите почту"}
            autoComplete={"email"}
            label={"Укажите почту"}
            borderRadius={"2px"}
            isRequired={true}
            componentStyle={true}
            icon={"@"}
          />
          <TextField
            type="password"
            name="password"
            autocomplete="current-password"
            placeholder={"Введите пароль"}
            label={"Введите пароль"}
            borderRadius={"2px"}
            isRequired={true}
            componentStyle={true}
          />
          <NavLink to={"signup"}>Зарегестрироваться</NavLink>
          <Button type={"submit"}>Войти</Button>
        </form>
      </FormWrapper>
    </>
  );
};
export default Signin;
