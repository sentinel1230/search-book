import styles from "./Header.module.css";
import svg from "../../../assets/Vector.svg";

import axios from "axios";
import { useState } from "react";

const Header = ({ setData }) => {
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Relevance");

  const searchBook = () => {
    if (search.length > 0) {
      setError("")
      
      let categoryQuery = category === "All" ? "" : `+subject:${category}`;
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${categoryQuery}&orderBy=${sort}&key=AIzaSyACVVH5jd4gApUBrEIXMFCfutn_fg3gtyU`,
        )
        .then((res) => {
          if (res.data.items && res.data.items.length > 0) {
            setData(res.data.items)
          } else {
            setData([])
            setError("No books found")
          }
        })
        .catch((err) => {
          console.log("Search error: ", err)
          setData([])
          setError("Error. Try again")
        });
    }
    else { setError("Empty string") }
  };

  const handleButtonClick = () => { searchBook() }

  const handleEnterClick = (evt) => {
    if (evt.key === "Enter") { searchBook() }
  }

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.title}>
          <a>Search for Books</a>
        </div>
        <div className={styles.search}>
          <input
            type="text"
            className={styles.bookNameInput}
            placeholder="Enter book name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleEnterClick}
          />
          <button className={styles.searchButton} onClick={handleButtonClick}>
            <img src={svg} />
          </button>
        </div>

        <div className={styles.bookSelect}>
          <div className={styles.tips}>
            <a className={styles.categoryTip}>categories</a>
            <a className={styles.sortTip}>sort by</a>
          </div>

          <select
            name="categories"
            className={`${styles.categorySelect} ${styles.select}`}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Art">Art</option>
            <option value="Biography">Biography</option>
            <option value="Computers">Computers</option>
            <option value="History">History</option>
            <option value="Medical">Medical</option>
            <option value="Poetry">Poetry</option>
          </select>

          <select
            name="sort"
            className={`${styles.sortSelect} ${styles.select}`}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="Relevance">Relevance</option>
            <option value="Newest">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
