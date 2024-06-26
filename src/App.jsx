import "./App.css";
import Header from "./pages/MainPage/Header/Header";
import Body from "./pages/MainPage/Body/Body";
import { useState } from "react";

const App = () => {
  const [bookData, setData] = useState([]);

  return (
    <>
      <Header setData={setData} />
      <Body bookData={bookData} />
    </>
  );
};

export default App;
