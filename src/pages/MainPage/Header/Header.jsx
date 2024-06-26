import styles from "./Header.module.css";
import svg from "../../../assets/Vector.svg";

import axios from "axios";
import { useState } from "react";

const Header = ({ setData }) => {
  const [search, setSearch] = useState("");
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyACVVH5jd4gApUBrEIXMFCfutn_fg3gtyU",
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

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
            onKeyPress={searchBook}
          />
          <button className={styles.searchButton}>
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
          </select>

          <select
            name="sort"
            className={`${styles.sortSelect} ${styles.select}`}
          >
            <option value="0">Relevance</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
