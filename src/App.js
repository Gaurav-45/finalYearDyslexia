import "./App.css";
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import HandWriting from "./components/HandWriting";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/handwritting" element={ <HandWriting/> } />
        <Route path="/video" element={ <Video/> } />
      </Routes>
    </div>
  );
}

export default App;
