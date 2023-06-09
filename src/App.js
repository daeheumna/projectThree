import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import Recipes from './components/Recipes';
import AdvancedSearch from './components/AdvancedSearch';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header>
    
            <h1>Random Recipe Generator</h1>

          <h5>Feeling unsure what to cook? Enter ingredient(s) below and we'll generate random recipes for you! For multiple ingredients, seperate them using commas.</h5>
        </header>

        <Routes>
          <Route path='/' element = {<Recipes/>}/>
          <Route path='/advancedSearch' element = {<AdvancedSearch/>}/>
        </Routes>

    </div>

    <footer>
      <p>made in 2023 by Denny Na. Credits to edamam api.</p>
    </footer>
    </div>
  );
}

export default App;
