import './App.css';
import { Routes, Route} from 'react-router-dom'
import Inicio from './components/inicio/Inicio.js';
import Game from './components/game/Game.js';


function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={ <Inicio/> } />
        <Route path='/game/:level' element={ <Game/> } />
      </Routes>
    </div>
  );
}

export default App;
