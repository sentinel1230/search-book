import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.title}><a>Search for Books</a></div>
                <input type="text" className={styles.bookNameInput} placeholder="Enter book name" />

                <div className={styles.bookSelect}>

                    <div className={styles.tips}>
                        <a className={styles.categoryTip}>categories</a>
                        <a className={styles.sortTip}>sort by</a>
                    </div>

                    <select name="categories" className={`${styles.categorySelect} ${styles.select}`}>
                        <option value="0">All</option>
                        <option value="1">Первый вариант</option>
                        <option value="2">Второй вариант</option>
                        <option value="3">Третий вариант</option>
                        <option value="4">Четвертый вариант</option>
                        <option value="5">Пятый вариант</option>
                    </select>

                    <select name="sort" className={`${styles.sortSelect} ${styles.select}`}>
                        <option value="0">Relevance</option>
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