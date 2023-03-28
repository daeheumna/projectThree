import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Recipes from './components/Recipes';
import AdvancedSearch from './components/AdvancedSearch';

function App() {
  return (
    <div className="App">
      <header>
  
          <h2>Random Recipe Generator</h2>

        <h6>Feeling unsure what to cook? Enter ingredient(s) below and we'll generate random recipes for you! For multiple ingredients, seperate them using commas.</h6>
      </header>

      <Routes>
        <Route path='/' element = {<Recipes/>}/>
        <Route path='/advancedSearch' element = {<AdvancedSearch/>}/>
      </Routes>

    
    </div>
  );
}

export default App;
