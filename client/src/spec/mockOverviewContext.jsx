/* eslint-disable max-len */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/prefer-default-export */
import React, { useState, useContext, useEffect, createContext } from 'react';

export const MockOverviewContext = createContext();

export function MockOverviewContextWrapper({ children }) {


  const [styleId, setStyleId] = useState(0);
  const [styleName, setStyleName] = useState('');
  const [mainPhoto, setMainPhoto] = useState('');
  const [sideScroll, setSideScroll] = useState('');
  const [photoIndex, setPhotoIndex] = useState(0);

  const values = {
    styleId,
    setStyleId,
    styleName,
    setStyleName,
    mainPhoto,
    setMainPhoto,
    sideScroll,
    setSideScroll,
    photoIndex,
    setPhotoIndex,
  };

  return <MockOverviewContext.Provider value={values}>{children}</MockOverviewContext.Provider>;
}

export function useMockOverviewContext() {
  const overviewCtx = useContext(MockOverviewContext);
  if (!overviewCtx) {
    throw new Error('Must use within MockContainer');
  }
  return overviewCtx;
}
