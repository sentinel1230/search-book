import c from './Body.module.css'
import BookCard from './bookInforamationCard/BookCard'

const Body = () => {
    return (
        <>
        <div className={c.container}>
            <div className={c.foundResults}>
                <a>Found 446 results</a>
                <div className={c.line}/>
            </div>

            <div className={c.cards}>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </div>
        </div>
        </>
    )
}

export default Body