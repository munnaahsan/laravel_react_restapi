import Devdata from "./pages/Devdata";
import DevdataList from "./pages/DevdataList";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={ <Devdata />} />
              <Route path="/add-dev" element={ <DevdataList />} />
          </Routes>
      </Router>
  );
}

export default App;
