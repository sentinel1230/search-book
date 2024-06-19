import c from './BookCard.module.css'

const BookCard = () => {
    return (
        <>
            <div className={c.card}>
                <div className={c.content}>
                    <div className={c.imageContent}/>
                    <div className={c.description}>
                        <div className={c.category}>Computers</div>
                        <div className={c.bookName}>Node.js разработка серверных приложений </div>
                        <div className={c.authorName}>Дэвид Хэрон</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookCard