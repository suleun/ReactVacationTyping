import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Upload from './components/Upload';
import Home from './components/Home';
import Game from './components/Game';
import Prac from './components/Prac';

function App() {
  return (
    <div className="App">
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
    
    <header>
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Home/>} />

        <Route path="/game" element={<Game/>} />
        <Route path="/prac" element={<Prac/>} />

        <Route path="/upload" element={<Upload/>} />

      </Routes>
    </BrowserRouter>
    </header>
    
    </div>
  );
}

export default App;
