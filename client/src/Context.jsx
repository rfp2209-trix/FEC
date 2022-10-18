/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  useState, useEffect, useContext, createContext,
} from 'react';
import axios from 'axios';
import { sumArray, avgStarValue } from '../helpers.js';

const ProductContext = createContext();

export function Context({ children }) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);

  const product_id = 40346;

  const getNewProduct = () => {
    // set the loading date to true for each call
    setLoading(true);
    // temporary state to hold various API call as they return
    let tempState = {};

    async function handleGetAllProductsInfo() {
      try {
        const [productsInfoGet, styleDetailsGet,
          relatedProductsInfoGet, reviewsMetaGet, reviewsGet, questionsGet] = await Promise.all([
          axios.get(`/fec/product/${product_id}`),
          axios.get(`/fec/product/styles/${product_id}`),
          axios.get(`/fec/related/${product_id}`),
          axios.get(`/fec/reviews/meta?product_id=${product_id}`),
          axios.get(`/fec/reviews?product_id=${product_id}&count=2`),
          axios.get(`/fec/questions/${product_id}`),
        ]);
        const productsInfo = productsInfoGet.data;
        const styleDetails = styleDetailsGet.data;
        const reviewsMeta = reviewsMetaGet.data;
        const reviews = reviewsGet.data;
        const relatedProductsInfo = relatedProductsInfoGet.data;
        const totalReviews = sumArray(Object.values(reviewsMeta.ratings));
        const avgReview = avgStarValue(reviewsMeta.ratings).toFixed(1);
        const questionsData = questionsGet.data;
        tempState = {
          productsInfo,
          styleDetails,
          reviewsMeta,
          reviews,
          avgReview,
          totalReviews,
          relatedProductsInfo,
          questionsData,
        };

        console.log(tempState);
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
