/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ThumbnailContainer = styled.div`
  margin-top: 175px;
  margin-right: 5px;
  display: flex;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  max-height: 450px;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  width: 100px;



`;
