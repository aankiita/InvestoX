import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const LinkBankAccount = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    name: "",
    number: "",
    age: "",
    type: "",
    upino: "",
  });

  const { name, number, age, type, upino } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInputValue({
      name: "",
      number: "",
      age: "",
      type: "",
      upino: "",
    });
    navigate("/");
  };
  

  return (
    <div className="form_containerr">
      <h4><b>Link Your Bank Account</b></h4>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Account Holder Name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your Account Holder Name"
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label htmlFor="number">Phone Number</label>
          <input
            type="text"
            name="number"
            value={number}
            placeholder="Enter your Phone Number"
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            value={age}
            placeholder="Enter your Age"
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label htmlFor="type">Account Type</label>
          <input
            type="text"
            name="type"
            value={type}
            placeholder="Enter Account Type (e.g. Savings/Current)"
            onChange={handleOnChange}
            required
          />
        </div>

        <div>
          <label htmlFor="upino">UPI ID</label>
          <input
            type="text"
            name="upino"
            value={upino}
            placeholder="Enter your UPI ID"
            onChange={handleOnChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Link Account
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default LinkBankAccount;
