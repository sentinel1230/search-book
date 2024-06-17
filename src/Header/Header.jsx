import c from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={c.content}>
                <div className={c.container}>
                    <div className={c.title}>
                        Search for Books
                    </div>

                    <input type="text" className={c.bookTitleInput} placeholder="Enter book name" />

                    <div className={c.bookCategories}>
                        <input type="text" className={c.bookCategoriesInput} placeholder="Categories" />
                        <input type="text" className={c.bookSortInput} placeholder="Sort" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header