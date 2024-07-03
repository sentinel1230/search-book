import styles from "./BookCard.module.css";
import { categories, bookTitle, authors, bookCover } from "../../constants/variables";

const BookCard = ({ bookData, openModal }) => {
  console.log(bookData)

  const uniqueBookData = bookData.filter((book, index, self) =>
    index === self.findIndex((b) => b.id === book.id)
  );

  return (
    <>
      {uniqueBookData.map((item, index) => {
        const uniqueKey = `${item.id} - ${index}`

        return (
          < div
            key={uniqueKey}
            className={styles.card}
            onClick={() => openModal(item)} >

            <div className={styles.content}>
              <img src={bookCover(item)} className={styles.imageContent} />
              <div className={styles.description}>
                <div className={`${styles.category} ${styles.truncate}`}>{categories(item)}</div>
                <div className={`${styles.bookName} ${styles.truncate}`}>{bookTitle(item)}</div>
                <div className={`${styles.authorName} ${styles.truncate}`}>{authors(item)}</div>
              </div>
            </div>
          </div >
        );
      })}
    </>
  );
};

export default BookCard;
