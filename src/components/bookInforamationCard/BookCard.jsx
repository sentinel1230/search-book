import styles from "./BookCard.module.css";
import { categories, bookTitle, authors, bookCover } from "./variables";

const BookCard = ({ bookData }) => {
  console.log(bookData)
  return (
    <>
      {bookData.map((item) => {
        return (
          <div key={item.id} className={styles.card}>
            <div className={styles.content}>
              <img src={bookCover(item)} className={styles.imageContent} />
              <div className={styles.description}>
                <div className={`${styles.category} ${styles.truncate}`}>{categories(item)}</div>
                <div className={`${styles.bookName} ${styles.truncate}`}>{bookTitle(item)}</div>
                <div className={`${styles.authorName} ${styles.truncate}`}>{authors(item)}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BookCard;
