import React from "react";
const FormWrapper = ({ children, title }) => {
  console.log();
  return (
    <section>
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </section>
  );
};
export default FormWrapper;
