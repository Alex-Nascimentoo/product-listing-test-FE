import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router'
import './css/general.css';

import { ProductList, ProductAdd } from './pages'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/add-product" exact element={<ProductAdd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
