import { useState } from "react";
import styles from "./Body.module.css";
import BookCard from "../../../components/bookInforamationCard/BookCard";

const Body = ({ bookData, searchBook }) => {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.foundResults}>
          <a>Found {bookData.length} results</a>
          <div className={styles.line} />
        </div>

        <div className={styles.cards}>{<BookCard bookData={bookData} />}</div>

        <div className={styles.loadButton}>
          <button className={styles.loadButtonStyle}>Load more</button>
        </div>
      </div>
    </>
  );
};

export default Body;
