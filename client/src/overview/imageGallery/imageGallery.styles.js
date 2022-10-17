/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import ImageGalleryMain from './imageGalleryMain.jsx';

export const ImageMainContainer = styled(ImageGalleryMain)`
  height: 400px;
`;

export const ThumbnailContainer = styled.div`

  // display: flex;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 400px;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  // border-style: solid;
  border-color: grey;
  border-radius: 6px;
  width: 100px;


`;
