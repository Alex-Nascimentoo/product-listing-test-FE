import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router'
import './css/general.css';

import { ProductList, ProductAdd, ProductAddFail } from './pages'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ProductList />} />
          <Route path="/add-product" exact element={<ProductAdd />} />
          <Route path="/add-product/repeatedSku" exact element={<ProductAddFail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
