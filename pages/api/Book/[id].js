import {
  deleteBook,
  getBookFromId,
  updateBook,
} from "../../../api-helpers/Controllers/books_controllers";
import { connexion } from "../../../api-helpers/utils";

export default async function handler(req, res) {
  connexion();
  if (req.method === "PUT") {
    return updateBook(req, res);
  } else if (req.method === "DELETE") {
    return deleteBook(req, res);
  } else if (req.method === "GET") {
    return getBookFromId(req, res);
  }
}
