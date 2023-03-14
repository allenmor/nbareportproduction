import NewsContainer from "./components/news/NewsContainer";
import { Routes, Route } from "react-router-dom";
import Stats from "./components/Stats";
import Standings from "./components/Standings";
import Navbars from "./components/Navbars";
import Lineups from "./components/Lineups";
import Leaders from "./components/Leaders";
import Footer from "./components/Footer";
import Player from "./components/Player";
import Boxscore from "./components/Boxscore";
import Picks from "./components/Picks";

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/; SameSite=None; Secure";
}
setCookie('myCookie', 'myValue', 7);
function App() {

  return ( 
    <div className="App">
      <Navbars />
      <Routes>
        <Route path="/" element={<NewsContainer />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/lineups" element={<Lineups />} />
        <Route path="/leaders" element={<Leaders />} />
        <Route path="/stats/player" element={<Player />} />
        <Route path="/boxscore" element={<Boxscore />} />
        <Route path="/picks" element={<Picks />} />
      </Routes>
      <Footer />
    </div> 
  );
}

export default App;
