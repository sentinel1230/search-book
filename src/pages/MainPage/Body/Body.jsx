import { useState } from "react";
import styles from "./Body.module.css";
import BookCard from "../../../components/bookInforamationCard/BookCard";
import Modal from "./Modal/Modal";

const Body = ({ bookData }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.foundResults}>
          <a>Found {bookData.length} results</a>
          <div className={styles.line} />
        </div>

        <div className={styles.cards}>{<BookCard bookData={bookData} openModal={openModal} />}</div>
        <div className={styles.loadButton}>
          <button className={styles.loadButtonStyle}>Load more</button>
        </div>
      </div>
      {isModalOpen && <Modal book={selectedBook} onClose={closeModal} />}
    </>
  );
};

export default Body;
