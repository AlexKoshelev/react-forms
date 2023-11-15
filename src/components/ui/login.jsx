import React from "react";
import TextField from "../common/form/text-field";
import FormWrapper from "../common/form-wrapper";
const Login = () => {
  return (
    <>
      <FormWrapper title={"Форма авторизации"}>
        {
          <TextField
            type="email"
            placeholder={"Введите почту"}
            label={"Укажите почту"}
            description={"Это описание"}
            borderRadius={"2px"}
            isRequired={true}
            /* error={"Текст ошибки"} */
            componentStyle={true}
            icon={"@"}
          />
        }
      </FormWrapper>
    </>
  );
};
export default Login;
