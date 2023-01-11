import { connexion } from "../../api-helpers/utils";
import {
  addBooks,
  getAllBooks,
} from "../../api-helpers/Controllers/books_controllers";

export default async function handler(req, res) {
  await connexion();
  if (req.method === "GET") {
    return getAllBooks(req, res);
  } else if (req.method === "POST") {
    return addBooks(req, res);
  }
}
