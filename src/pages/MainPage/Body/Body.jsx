import { useState } from "react";
import styles from "./Body.module.css";
import BookCard from "../../../components/bookInforamationCard/BookCard";

const Body = ({ bookData, searchBook }) => {

  const [loadedBooksCount, setLoadedBooksCount] = useState(bookData.length)

  const loadMoreBooks = () => {
    const newLoadedBooksCount = loadedBooksCount + 10; // Увеличиваем количество загруженных книг на 10
    setLoadedBooksCount(newLoadedBooksCount);
    searchBook(newLoadedBooksCount); // Вызываем функцию поиска книг с новым значением loadedBooksCount
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.foundResults}>
          <a>Found {bookData.length} results</a>
          <div className={styles.line} />
        </div>

        <div className={styles.cards}>{<BookCard bookData={bookData} />}</div>

        <div className={styles.loadButton}>
          <button className={styles.loadButtonStyle} onClick={loadMoreBooks}>Load more</button>
        </div>
      </div>
    </>
  );
};

export default Body;
