import React, {useState, useEffect, useContext, createContext} from 'react';
import axios from 'axios';

const ProductContext = createContext();

export function Context({ children }) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true)

  const product_id = 40344

  useEffect(() => {
    getNewProduct(product_id)
  }, []);

  const getNewProduct = (product_id) => {
    //set the loading date to true for each call
    setLoading(true);
    //temporary state to hold various API call as they return
    let tempState = {}

    async function handleGetAllProductsInfo (product_id) {
      try {
        let productsInfo = await axios.get(`/fec/product/${product_id}`)
        //let nextGet = ...
        tempState = {...productsInfo.data}
        setState(tempState)
        setLoading(false);
      } catch(err) {
        console.log(err.message)
        setLoading(false)
      }
    }
    handleGetAllProductsInfo(40344);

  }

  const values = {
    ...state,
    state,
    setState,
    getNewProduct
  }



  return <ProductContext.Provider value={values}>{children}</ProductContext.Provider>

};

export function useProductsContext() {
  const context = useContext(ProductContext)
  if(!context) {
    throw new Error ('Must use within the ProductContext provider!!')
  }
  return context;
}






