import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, withStyles, Switch } from "@material-ui/core";
import Header from "./components/header/Header";
import Definitions from "./components/definitions/Definitions";
import { grey } from "@material-ui/core/colors";

function App() {
  // state management
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");

  // Material UI Component for switching between Light / Dark Mode
  const ThemeSwitcher = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  // fetch data from API
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      // console.log(data);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(meanings);
  // use dictionaryApi if the values for word and category are changed
  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

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
        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
