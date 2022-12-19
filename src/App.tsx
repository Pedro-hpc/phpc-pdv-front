import React from 'react';    
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';

function App() {
  return (
    <div>
      <ProductForm />
      <ProductList />
      <ProductSearch />
    </div>
  );
}

export default App;
