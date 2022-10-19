/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/prefer-default-export */
import React, { useState, useContext, createContext } from 'react';
import { useProductsContext } from '../Context.jsx';

const OverviewContext = createContext();

export function OverviewContextWrapper({ children }) {
  const { styleDetails, loading } = useProductsContext({});
  const [styleID, setStyleID] = useState({});
  const id = (!loading && styleDetails) ? styleDetails.results[0].style_id : 0;
  if (id) { setStyleID(id); }

  const values = {
    styleID,
    setStyleID,
  };

  return <OverviewContext.Provider value={values}>{children}</OverviewContext.Provider>;
}

export function useOverviewContext() {
  const overviewCtx = useContext(OverviewContext);
  if (!overviewCtx) {
    throw new Error('Must use within Overview Container');
  }
  return overviewCtx;
}
