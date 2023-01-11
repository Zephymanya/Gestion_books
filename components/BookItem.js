import React, { Fragment, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import Link from "next/link";
import { deleteDook } from "../api-helpers/frontend/utils";
import { router } from "next/router";

const BookItem = ({ title, id, author, imageUrl, featured, prix }) => {
  const handleDelete = () => {
    deleteDook(id)
      .then(() => setOpen(true))
      .catch((err) => console.log(err));
  };
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <Card
        sx={{
          width: "100%",
          height: "100% ",
          borderRadius: 3,
          boxShadow: "5px 5px 10px #ccc ",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        <div style={{ width: "100%", height: "50%" }}>
          <div>featured</div>
          <img src={imageUrl} alt={title} width={"100%"} height={"50%"} />
        </div>

        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {prix}
          </Typography>
        </CardContent>

        <CardActions>
          <Link href={`/books/${id}`}>
            {" "}
            <Button size="small" color="primary">
              EDIT
            </Button>
          </Link>

          <Button onClick={handleDelete} size="small" color="primary">
            DELETE
          </Button>
        </CardActions>
      </Card>
      {open && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={() => {
            setOpen(false);
            router.push("/books");
          }}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            successful tokossss!
          </Alert>
        </Snackbar>
      )}
    </Fragment>
  );
};

export default BookItem;
