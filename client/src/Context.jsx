/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import axios from 'axios';

const ProductContext = createContext();

export function Context({ children }) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);

  const product_id = 40344;

  const getNewProduct = () => {
    // set the loading date to true for each call
    setLoading(true);
    // temporary state to hold various API call as they return
    let tempState = {};

    async function handleGetAllProductsInfo() {
      try {
        const [productsInfo, styleDetails, relatedProductsInfo] = await Promise.all([
          axios.get(`/fec/product/${product_id}`),
          axios.get(`/fec/product/styles/${product_id}`),
          axios.get(`/fec/related/${product_id}`),
        ]);
        tempState = { ...productsInfo.data, ...styleDetails.data, ...[relatedProductsInfo.data] };
        setState(tempState);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    }
    handleGetAllProductsInfo(40344);
  };

  useEffect(() => {
    getNewProduct(product_id);
  }, []);

  const values = {
    ...state,
    state,
    setState,
    getNewProduct,
    loading,
  };

  return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>;
}

export function useProductsContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('Must use within the ProductContext provider!!');
  }
  return context;
}
