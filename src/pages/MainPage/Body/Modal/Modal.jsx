import styles from './Modal.module.css'
import cancel from '../../../../assets/Cancel.svg'
import { categories, bookTitle, authors, bookCover, description } from "../../../../constants/variables";

const Modal = ({ book, onClose }) => {
    return (
        <>
            <div className={styles.overlay}>
                <div className={styles.modalWindow}>
                    <div className={styles.closeButton} onClick={onClose}>
                        <img src={cancel} />
                    </div>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <div className={styles.imageContent}>
                                <img src={bookCover(book)} calssName={styles.image} />
                            </div>
                            <div className={styles.information}>
                                <h2>Name: {bookTitle(book)}</h2>
                                <h2>Authors: {authors(book)}</h2>
                                <h2>Category: {categories(book)}</h2>
                            </div>
                        </div>

                        <div className={styles.description}>
                            <p>{description(book)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal