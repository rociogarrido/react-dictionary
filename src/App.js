import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Header from "./components/header/Header";

function App() {
  // state management
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");

  // fetch data from API
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/plane`
      );
      // console.log(data);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#282c34",
        color: "white",
        height: "100vh",
      }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
      </Container>
    </div>
  );
}

export default App;
