import React, {useState, useEffect, useContext, createContext} from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export function Context(props) {
  const [product, setProduct] = useState([]);
  const product_id = 40344

  useEffect(() => {
    axios.get(`/fec/product/${product_id}`)
      .then((product) => {
        setProduct(product.data)
      })
  }, []);

  return <ProductContext.Provider value={[product, setProduct]} {...props}>{props.children}</ProductContext.Provider>

}


