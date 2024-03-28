import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { useState } from "react";
import "./App.css";
import Character from "./components/Character";

// -------------  PARTAGER UN STATE A UN COMPOSANT -----------------------

function App() {
  const { width, height } = useWindowSize(); // hook pour les Confetti

  // ETAPE 1 : Je définis ci-dessous mes states
  const [homerDonut, sethomerDonut] = useState(0);
  const [bartDonut, setBartDonut] = useState(0);

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
        // ETAPE 2 : Je donne mes states en props à mon composant Character. Voici un exemple ci-après :
        // nomDeLaProps={valeur}
        donuts={homerDonut} // la props donuts attend un state comme valeur. Ici on lui passe le state d'Homer "homerDonut"
        setDonuts={sethomerDonut} // la props setDonuts attend le setter du state. Ici on lui passe le setState d'Homer "sethomerDonut"
      />
      <Character
        firstname={bart.firstname}
        lastname={bart.lastname}
        imagePath={bart.imagePath}
        donuts={bartDonut}
        setDonuts={setBartDonut}
      />
      {/* -------- BONUS ---------- */}
      {homerDonuts >= 20 && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={2000}
          recycle={false}
        />
      )}
      {/* -------------------------- */}
      <img
        src="https://www.stickees.com/files/cartoon/the-simpsons/2370-pink-donut.png"
        alt="donut"
        className="donut-infinite"
      />
    </div>
  );
}

export default App;
