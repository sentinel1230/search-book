import styles from "./BookCard.module.css";

const BookCard = ({ bookData }) => {
  console.log(bookData);
  return (
    <>
      {bookData.map((item) => {
        let bookCover = item.volumeInfo.imageLinks.thumbnail;
        let bookTitle = item.volumeInfo.title;
        let authors = item.volumeInfo.authors;
        let categories = item.volumeInfo.categories;
        return (
          <div key={item.id} className={styles.card}>
            <div className={styles.content}>
              <img src={bookCover} className={styles.imageContent} />
              <div className={styles.description}>
                <div className={styles.category}>{categories}</div>
                <div className={styles.bookName}>{bookTitle}</div>
                <div className={styles.authorName}>{authors}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BookCard;
