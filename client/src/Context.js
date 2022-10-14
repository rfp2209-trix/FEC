import React, {useState, useEffect, useContext, createContext} from 'react';
import axios from 'axios';

const ProductContext = createContext();

function ProductProvider(props) {
  const [product, setProduct] = useState([]);
  const product_id = 40344

  useEffect(() => {
    axios.get(`/fec/product/${product_id}`)
      .then((product) => {
        setProduct(product)
      })
  }, []);

  return <ProductContext.Provider value={[product]} {...props} />

}

export default ProductProvider
