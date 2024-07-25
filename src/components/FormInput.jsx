import React from "react";

const Form = ({type , label , defaultValue , name , size}) => {
  return (
    <div className="form-control ">
      <div className="label">
        <span className="label-text"> {label} </span>
      </div>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};

export default Form;
