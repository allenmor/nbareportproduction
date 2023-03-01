import NewsContainer from "./components/news/NewsContainer";
import { Routes, Route } from "react-router-dom";
import Stats from "./components/Stats";
import Standings from "./components/Standings";
import Navbars from "./components/Navbars";
import Lineups from "./components/Lineups";
import Leaders from "./components/Leaders";
import Games from "./components/Games";
import Footer from "./components/Footer";

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
        <Route path="/games" element={<Games />} />
      </Routes>
      <Footer />
    </div> 
  );
}

export default App;
