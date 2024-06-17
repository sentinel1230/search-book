import c from './Header.module.css'

const Header = () => {
    return (
        <div className={c.background}>
            <div className={c.container}>
                <div className={c.title}><a>Search for Books</a></div>
                <input type="text" className={c.bookNameInput} placeholder="Enter book name" />
                <div className={c.bookSelect}>
                    <select name="categories" className={`${c.categorySelect} ${c.select}`}>
                        <option value="0">Category</option>
                        <option value="1">Первый вариант</option>
                        <option value="2">Второй вариант</option>
                        <option value="3">Третий вариант</option>
                        <option value="4">Четвертый вариант</option>
                        <option value="5">Пятый вариант</option>
                    </select>

                    <select name="sort" className={`${c.sortSelect} ${c.select}`}>
                        <option value="0">Sort by</option>
                        <option value="1">Первый вариант</option>
                        <option value="2">Второй вариант</option>
                        <option value="3">Третий вариант</option>
                        <option value="4">Четвертый вариант</option>
                        <option value="5">Пятый вариант</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Header