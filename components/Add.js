import React from "react";
import { sendBook } from "../api-helpers/frontend/utils";
import Form from "./Form";

const Add = () => {
  const getFormData = (data1) => {
    sendBook(data1)
      .then((value) => {
        console.log(value);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Form onSubmit={getFormData} />
    </div>
  );
};

export default Add;
