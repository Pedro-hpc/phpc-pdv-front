import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductSearch from './components/ProductSearch';
import { Product } from './models/product';

function App() {

  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      barcode: "002178",
      description: "achocolatado nescal 400g",
      price: 7.60,
      image: "https://a-static.mlcdn.com.br/1500x1500/achocolatado-nescau-2-0-actigen-e-370g-nestle/mercadotemdetudo/3dd3fa382de611ec9fda4201ac185049/9dd30e6b98697cc14b35a40d9e0cb9e1.jpeg"
    },
    {
      id: "2",
      barcode: "002178",
      description: "café damasco 300g",
      price: 9.30,
      image: "https://a-static.mlcdn.com.br/1500x1500/achocolatado-nescau-2-0-actigen-e-370g-nestle/mercadotemdetudo/3dd3fa382de611ec9fda4201ac185049/9dd30e6b98697cc14b35a40d9e0cb9e1.jpeg"
    },
    {
      id: "3",
      barcode: "002178",
      description: "pão francês 600g",
      price: 3.10,
      image: "https://a-static.mlcdn.com.br/1500x1500/achocolatado-nescau-2-0-actigen-e-370g-nestle/mercadotemdetudo/3dd3fa382de611ec9fda4201ac185049/9dd30e6b98697cc14b35a40d9e0cb9e1.jpeg"
    }
  ])
  function addProduct(product: Product) {
    setProducts([...products, product])
  }
  return (

    <div>
      <ProductForm onSave={p => addProduct(p) }/>
      <ProductList products={products} />
      <ProductSearch />
    </div>
  );
}

export default App;
