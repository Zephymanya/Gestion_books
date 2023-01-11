import { getAllBooks } from "../../api-helpers/frontend/utils";
import BookListe from "../../components/BookListe";

function booksHom({ books }) {
  return <BookListe  data={books} />;
}
export default booksHom;

export const getStaticProps = async () => {
  const books = await getAllBooks();

  return {
    props: {
      books,
    },
  };
};
