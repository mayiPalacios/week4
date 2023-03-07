import React, { useState } from "react";
import Game from "./pages/game/game.js";
import Home from "./pages/home/home.js";
import AllItems from "./pages/home/AllItems.js";
function App() {
  const [currentRoute, setCurrentRoute] = useState("/home");

  let route;
  switch (currentRoute) {
    case "/game":
      route = <Game setRoute={setCurrentRoute} />;

      break;

    case "/all":
      route = <AllItems setRoute={setCurrentRoute} />;
      break;
    default:
      route = <Home setRoute={setCurrentRoute} />;
      break;
  }
  return (
    <div className="App">
      <header className="App-header">
        <Game />
      </header>
    </div>
  );
}

export default App;
