import "./App.css";

function App() {
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/plane`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return <div className="App">hello world</div>;
}

export default App;
