import Devdata from "./pages/Devdata";
import DevdataList from "./pages/DevdataList";
import EditdataList from "./pages/EditdataList";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={ <Devdata />} />
              <Route path="/add-dev" element={ <DevdataList />} />
              <Route exact path="/edit-data/:id" element={ <EditdataList />} />
          </Routes>
      </Router>
  );
}

export default App;
