import Books from "../models/Books";

export const getAllBooks = async (req, res) => {
  let books;
  try {
    books = await Books.find();
    // console.log(books);
  } catch (error) {
    return new Error(error);
  }
  if (!books) return res.status(500).json({ message: "Erreur de serveur" });

  if (books.length === 0) {
    return res.status(404).json({ message: "Pas des livres trouver" });
  }

  return res.status(200).json({ books });
};

export const addBooks = async (req, res) => {
  let book;

  const { title, author, prix, urlImage, featured } = req.body;
  if (
    !title &&
    title.trim() === "" &&
    !author &&
    author.trim() === "" &&
    !prix &&
    prix.trim() === "" &&
    !urlImage &&
    urlImage.trim() === "" &&
    !featured
  ) {
    return res.status(402).json({ message: "erreur d'insertion" });
  }

  try {
    book = new Books({ title, author, prix, urlImage, featured });
    book = await book.save();
    console.log(book);
  } catch (error) {
    console.log(error);
    return new Error(error);
  }

  if (!book) {
    console.log(book);
    return res.status(500).json({ message: "Erreur de servuer" });
  }
  console.log(book);
  return res.status(201).json(book);
};

export const updateBook = async (req, res) => {
  const id = req.query.id;
  console.log(id);

  const { title, author, prix, urlImage, featured } = req.body;
  if (
    !title &&
    title.trim() === "" &&
    !author &&
    author.trim() === "" &&
    !prix &&
    prix.trim() === "" &&
    !urlImage &&
    urlImage.trim() === "" &&
    !featured
  ) {
    return res.status(402).json({ message: "erreur de modification" });
  }

  let book;

  try {
    book = await Books.findByIdAndUpdate(id, {
      title,
      author,
      prix,
      urlImage,
      featured,
    });
    console.log(book);
  } catch (error) {
    console.log(error);
    return console.log(error);
    // return new Error(error);
  }

  if (!book) return res.status(500).json({ message: "Erreur de serveur" });

  return res.status(200).json({ message: "Modification avec succès" });
};

export const deleteBook = async (req, res) => {
  const id = req.query.id;

  let book;
  try {
    book = await Books.findByIdAndRemove(id);
  } catch (error) {
    return new Error(error);
  }
  if (!book) {
    return res.status(500).json({ message: "Erreur de serveur" });
  }
  return res.status(200).json({ message: "Supression avec succès" });
};

export const getBookFromId = async (req, res) => {
  const id = req.query.id;
  let book;

  try {
    book = await Books.findById(id);
  } catch (error) {
    return new Error(error);
  }
  if (!book) {
    return res
      .status(404)
      .json({ message: "Pas de livre correspondant à cet Id" });
  }
  return res.status(200).json({ book });
};
