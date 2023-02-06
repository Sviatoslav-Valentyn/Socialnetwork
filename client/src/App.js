import Registation from "./Components/Registation/idnex";
import {Routes, Route} from 'react-router-dom';
import Header from "./Components/Registation/Header";
import HeaderAll from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="*" element={<HeaderAll />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Registation />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
