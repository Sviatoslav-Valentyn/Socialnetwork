import Registation from "./Components/Registation/idnex";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registation />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
