import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Header from './modules/layout/Header';
import Owners from './modules/owners/components/Owners';
import Products from './modules/products/Products';

function App() {
  return (
    <div className="App">
      <div className="row">
        <Header className="col-md-12" />
      </div>
      <Routes>
        <Route path='/' element={<Owners />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='*' element={<Navigate to={'/'} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
