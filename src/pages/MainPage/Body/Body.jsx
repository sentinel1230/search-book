import styles from "./Body.module.css";
import BookCard from "../../../components/bookInforamationCard/BookCard";

const Body = ({ bookData }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.foundResults}>
          <a>Found 446 results</a>
          <div className={styles.line} />
        </div>

        <div className={styles.cards}>{<BookCard bookData={bookData} />}</div>
      </div>
    </>
  );
};

export default Body;
