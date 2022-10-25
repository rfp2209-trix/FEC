/* eslint-disable max-len */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/prefer-default-export */
import React, { useState, useContext, createContext } from 'react';

const OverviewMockContext = createContext();

export function OverviewMockContextWrapper({ children }) {
  const [styleId, setStyleId] = useState(0);
  const [styleName, setStyleName] = useState('');
  const [mainPhoto, setMainPhoto] = useState('');
  const [sideScroll, setSideScroll] = useState('');
  const [photoIndex, setPhotoIndex] = useState(0);

  const mockOverviewValues = {
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

  return <OverviewMockContext.Provider value={mockOverviewValues}>{children}</OverviewMockContext.Provider>;
}

export function useMockOverviewContext() {
  const context = useContext(OverviewMockContext);
  return context;
}
