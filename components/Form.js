import {
  Checkbox,
  FormLabel,
  TextField,
  Typography,
  labelSx,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Form = ({ data, onSubmit }) => {
  const [input, setInput] = useState(
    data
      ? {
          title: data.title,
          author: data.author,
          prix: data.prix,
          urlImage: data.urlImage,
          featured: data.featured,
        }
      : {
          title: "",
          author: "",
          prix: "",
          urlImage: "",
          featured: false,
        }
  );
  const andleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "80%",
        heigth: "100",
        margin: "auto",
        boxShadow: "10px 10px 20px #ccc ",
      }}
    >
      <Typography
        color={"#cc5333"}
        fontWeight="bold"
        variant="h5"
        mt={1}
        padding={2}
        textAlign="center"
      >
        {data ? "Book detail" : "Add Book"}{" "}
      </Typography>
      <Box padding={3} display="flex" flexDirection={"column"}>
        <FormLabel sx={labelSx}>Title</FormLabel>
        <TextField
          onChange={andleChange}
          value={input.title}
          name="title"
          margin="normal"
        />
        <FormLabel sx={labelSx}>Author</FormLabel>
        <TextField
          onChange={andleChange}
          value={input.author}
          name="author"
          margin="normal"
        />{" "}
        <FormLabel sx={labelSx}>ImageUrl</FormLabel>
        <TextField
          onChange={andleChange}
          value={input.urlImage}
          name="urlImage"
          margin="normal"
        />
        <FormLabel sx={labelSx}>prix</FormLabel>
        <TextField
          onChange={andleChange}
          value={input.prix}
          name="prix"
          margin="normal"
        />
        <FormLabel sx={labelSx}>Feature</FormLabel>
        <Checkbox
          onChange={(e) => {
            setInput((prevState) => ({
              ...prevState,
              featured: e.target.checked,
            }));
          }}
          checked={input.featured}
          name="featured"
          sx={{ marginRight: "auto" }}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default Form;
