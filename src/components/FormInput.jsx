import React from "react";

const Form = ({type , label , defaultValue , name}) => {
  return (
    <label className="form-control ">
      <div className="label">
        <span className="label-text"> {label} </span>
      </div>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered"
      />
      <div className="label">
      </div>
    </label>
  );
};

export default Form;
