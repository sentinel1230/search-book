import { useState } from "react";
import styles from "./Header.module.css";
import svg from "../../../assets/Vector.svg";
import SelectComponent from "./SelectComponent/SelectComponent";
import { categoryOptions, sortOptions } from "./SelectComponent/SelectData";

import axios from "axios";

const Header = ({ setData }) => {
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Relevance");

  const searchBook = () => {
    if (search.length > 0) {
      setError("")

      let catUrl = category === "All" ? "" : `+subject:${category}`
      let url = `https://www.googleapis.com/books/v1/volumes?q=${search}${catUrl}&orderBy=${sort}&key=AIzaSyACVVH5jd4gApUBrEIXMFCfutn_fg3gtyU`

      axios
        .get(url)
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

          <SelectComponent
            name="categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={categoryOptions}
          />

          <SelectComponent
            name="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            options={sortOptions}
          />

        </div>
      </div>
    </div>
  );
};

export default Header;
