import NewsContainer from "./components/news/NewsContainer";
import { Routes, Route } from "react-router-dom";
import Stats from "./components/Stats";
import Standings from "./components/Standings";
import Navbars from "./components/Navbars";


function App() {
  return ( 
    <div className="App">
      <Navbars />
      <Routes>
        <Route path="/" element={<NewsContainer />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </div> 
  );
}

export default App;
