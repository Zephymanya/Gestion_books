import Head from "next/head";
import Image from "next/image";
import { getFeatureBooks } from "../api-helpers/frontend/utils";
import BookListe from "../components/BookListe";
import styles from "../styles/Home.module.css";

export default function Home({ books }) {
  console.log(books);
  return (
    <div className={styles.container}>
      <BookListe featurePage data={books} />
    </div>
  );
}

export const getStaticProps = async () => {
  const books = await getFeatureBooks();
  return {
    props: {
      books,
    },
  };
};
