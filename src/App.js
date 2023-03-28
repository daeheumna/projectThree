import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Recipes from './components/Recipes';
import AdvancedSearch from './components/AdvancedSearch';

function App() {
  return (
    <div className="App">
      <Link to='/'>
        <h2>Random Recipe Generator</h2>
      </Link>

      <Routes>
        <Route path='/' element = {<Recipes/>}/>
        <Route path='/advancedSearch' element = {<AdvancedSearch/>}/>
      </Routes>

    
    </div>
  );
}

export default App;
