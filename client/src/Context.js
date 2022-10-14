import React, {useState, useEffect, useContext, createContext} from 'react';
import axios from 'axios';

const ProductContext = createContext();

export function Context({ children }) {
  const [product, setProduct] = useState([]);
  const product_id = 40344

  useEffect(() => {
    axios.get(`/fec/product/${product_id}`)
      .then((product) => {
        setProduct(product.data)
      })
  }, []);

  const value = {

  }


  // const value = {
  //   ...product,
  //   getSomething,

  // }

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>

}




