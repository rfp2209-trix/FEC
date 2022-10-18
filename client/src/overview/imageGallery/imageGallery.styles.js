/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import ImageGalleryMain from './imageGalleryMain.jsx';

export const ImageMainContainer = styled(ImageGalleryMain)`
  // height: 400px;
`;

export const ThumbnailContainer = styled.div`
  margin-top:200px;
  display: flex;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 455px;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }


  width: 100px;



`;
