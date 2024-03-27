import "./App.css";
import Character from "./components/Character";

function App() {
  const homer = {
    firstname: "homer",
    lastname: "simpson",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };

  const lisa = {
    firstname: "lisa",
    lastname: "bla",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };

  return (
    <>
      <Character
        firstname={homer.firstname}
        lastname={homer.lastname}
        imagePath={homer.imagePath}
      />
      <Character
        firstname={lisa.firstname}
        lastname={lisa.lastname}
        imagePath={lisa.imagePath}
      />
    </>
  );
}

export default App;
