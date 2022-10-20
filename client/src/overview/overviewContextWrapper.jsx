/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/prefer-default-export */
import React, { useState, useContext, createContext } from 'react';

const OverviewContext = createContext();

export function OverviewContextWrapper({ children }) {
  const [styleId, setStyleId] = useState(0);
  const [styleName, setStyleName] = useState('');
  const [mainPhoto, setMainPhoto] = useState('');
  const [sideScroll, setSideScroll] = useState('');
  const values = {
    styleId,
    setStyleId,
    styleName,
    setStyleName,
    mainPhoto,
    setMainPhoto,
    sideScroll,
    setSideScroll,
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
