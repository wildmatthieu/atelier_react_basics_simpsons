// import Confetti from "react-confetti";
// import useWindowSize from "react-use/lib/useWindowSize";
import "./App.css";
import Character from "./components/Character";

function App() {
  // const { width, height } = useWindowSize();

  const homer = {
    firstname: "Homer",
    lastname: "Simpson",
    imagePath:
      "https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png",
    happyHomer:
      "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
  };

  const bart = {
    firstname: "Bart",
    lastname: "Simpson",
    imagePath:
      "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  };

  return (
    <div className="app-container">
      <Character
        firstname={homer.firstname}
        lastname={homer.lastname}
        imagePath={homer.imagePath}
        happyHomer={homer.happyHomer}
      />
      <Character
        firstname={bart.firstname}
        lastname={bart.lastname}
        imagePath={bart.imagePath}
      />
      <img
        src="https://www.stickees.com/files/cartoon/the-simpsons/2370-pink-donut.png"
        alt="donut"
        className="donut-infinite"
      />
    </div>
  );
}

export default App;

{
  /* {homerDonuts >= 20 && (
  <Confetti
    width={width}
    height={height}
    numberOfPieces={2000}
    recycle={false}
  />
)} */
}
