import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdoptionShop from './pages/AdoptionShop';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/adoption' element={<AdoptionShop/>}></Route>
    </Routes>
  );
}

export default App;
