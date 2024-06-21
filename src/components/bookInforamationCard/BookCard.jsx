import styles from './BookCard.module.css'

const BookCard = () => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.content}>
                    <div className={styles.imageContent} />
                    <div className={styles.description}>
                        <div className={styles.category}>Computers</div>
                        <div className={styles.bookName}>Node.js разработка серверных приложений </div>
                        <div className={styles.authorName}>Дэвид Хэрон</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookCard