import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home, Category, Recipe } from './pages';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:category' element={<Category />} />
        <Route path='/recipe/:recipe' element={<Recipe />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);