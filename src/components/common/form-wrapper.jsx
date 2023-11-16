import React from "react";
import PropTypes from "prop-types";
const FormWrapper = ({ children, title }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </section>
  );
};
FormWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
export default FormWrapper;
