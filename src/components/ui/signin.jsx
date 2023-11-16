import React, { useRef, useState } from "react";
import TextField from "../common/form/text-field";
import FormWrapper from "../common/form-wrapper";
import { NavLink } from "react-router-dom";
import Button from "../common/button";
const Signin = ({ handleSubmit }) => {
  const refSignin = useRef(null);
  const [signinData, setSigninData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setSigninData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  const handleReset = () => {
    setSigninData({ email: "", password: "" });
  };
  return (
    <>
      <FormWrapper title={"Форма авторизации"}>
        <form
          ref={refSignin}
          onSubmit={(e) => handleSubmit(e, signinData, refSignin)}
          onChange={handleChange}
          onReset={handleReset}
        >
          <TextField
            type="email"
            name="email"
            placeholder={"Введите почту"}
            label={"Укажите почту"}
            borderRadius={"2px"}
            isRequired={true}
            componentStyle={true}
            icon={"@"}
          />
          <TextField
            type="password"
            name="password"
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
