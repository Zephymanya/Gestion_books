import React from "react";
import { Grid } from "@mui/material";
import BookItem from "./BookItem";

const BookListe = ({ featurePage, data }) => {
  console.log(data);
  return (
    <Grid padding={2} spacing={3} container>
      {data.map((book) => (
        <Grid
          sx={6}
          sm={4}
          md={3}
          lg={3}
          width={featurePage ? "500px" : "100px"}
          height={"100%"}
          item
          key={book._id}
        >
          <BookItem
            title={book.title}
            author={book.author}
            id={book._id}
            imageUrl={book.imageUrl}
            featured={book.featured}
            prix={book.prix}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookListe;
