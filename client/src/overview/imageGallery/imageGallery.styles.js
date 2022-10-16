/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import ImageGallery from './imageGallery.jsx';

export const ImageGalleryContainer = styled(ImageGallery)`
  display: flex;
  height: 500px;
  overflow: hidden;
  overflow-y: scroll;
`;
