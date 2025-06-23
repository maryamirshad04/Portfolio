import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu'; 
import About from './pages/About'; 
import Edu from './pages/Edu'; 
import Skill from './pages/Skill'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      
      <Route path="/" element={<Menu />} />
      <Route path="/About" element={<About />} />
      <Route path="/" element={<About />} />
      <Route path="/Menu" element={<Menu />} />
      
      <Route path="/" element={<Menu />} />
      <Route path="/Edu" element={<Edu />} />
      <Route path="/" element={<Edu />} />
      <Route path="/Menu" element={<Menu />} />

      <Route path="/" element={<Menu />} />
      <Route path="/Skill" element={<Skill />} />
      <Route path="/" element={<Skill />} />
      <Route path="/Menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
