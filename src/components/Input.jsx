import React from "react";

const Input = ({ type, id, name, onChange, placeholder }) => {
  return (
    <input
    className="h-10 w-full border rounded-md p-2 outline-none mt-2"
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
