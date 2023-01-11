import axios from "axios";
export const getAllBooks = async () => {
  const res = await axios.get("http://localhost:3000/api/books");

  if (res.status !== 200) {
    return new Error("Erreur de serveur");
  }
  const data = await res.data?.books;
  return data;
};

export const getFeatureBooks = async () => {
  const books = await getAllBooks();
  if (books.length == 0) {
    return [];
  }
  const featureqbooks = books.filter((book) => book.featured === true);
  return featureqbooks;
};

export const sendBook = async (data) => {
  const res = axios.post("http://localhost:3000/api/books", {
    title: data.title,
    author: data.author,
    prix: Number(data.prix),
    urlImage: data.urlImage,
    featured: Boolean(data.featured),
  });

  if ((await res).status !== 201) {
    return new Error("Requette rejeter");
  }

  const data1 = await res.data;
  return data1;
};

export const getBookFromId = async (id) => {
  const res = await axios.get(`http://localhost:3000/api/Book/${id}`);
  if (res.status !== 200) {
    return new Error("Impossible d'obtenir le livre par ce numéro");
  }
  const data = await res.data;
  return data.book;
};

export const updateBook = async (id, data) => {
  const res = axios.put(`http://localhost:3000/api/Book/${id}`, {
    title: data.title,
    author: data.author,
    prix: Number(data.prix),
    urlImage: data.urlImage,
    featured: Boolean(data.featured),
  });

  if (res.status !== 200) {
    return new Error("Impossible de modifier");
  }
  const resData = await res.data;
  return resData;
};

export const deleteDook = async (id, data) => {
  const res = await axios.delete(`http://localhost:3000/api/Book/${id}`);
  if (res.status !== 200) {
    return new Error("Erreur de suppression");
  }
  const resData = await res.data;
  return resData;
};
