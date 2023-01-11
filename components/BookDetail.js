import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getBookFromId, updateBook } from "../api-helpers/frontend/utils";
import Form from "./Form";

export const BookDetail = () => {
  const [book, setBook] = useState();
  const router = useRouter();
  const id = router.query.id;
  useEffect(() => {
    getBookFromId(id)
      .then((data) => setBook(data))
      .catch((err) => console.log(err));
  }, [router.query.id]);

  const getFormDta = (data) => {
    updateBook(id, data)
      .then((value) => console.log(value))
      .then(() => {
        router.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      {book ? (
        <Form data={book} onSubmit={getFormDta} />
      ) : (
        <p>Conténu non trouvé </p>
      )}
    </div>
  );
};
