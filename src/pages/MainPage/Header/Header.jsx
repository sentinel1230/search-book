import styles from "./Header.module.css";
import svg from "../../../assets/Vector.svg";

import axios from "axios";
import { useState } from "react";

const Header = ({ setData }) => {
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const searchBook = () => {
    if (search.length > 0 && search.length <= 35) {
      setError("")
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyACVVH5jd4gApUBrEIXMFCfutn_fg3gtyU",
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
    else { setError("Your string should be between 3 and 35 characters") }
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
          >
            <option value="0">All</option>
            <option value="1">Art</option>
            <option value="2">Biography</option>
            <option value="3">Computers</option>
            <option value="4">History</option>
            <option value="5">Medical</option>
            <option value="6">Poetry</option>
          </select>

          <select
            name="sort"
            className={`${styles.sortSelect} ${styles.select}`}
          >
            <option value="0">Relevance</option>
            <option value="1">Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
