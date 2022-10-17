/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 380px;
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  border-style: solid;
  border-color: grey;
  border-radius: 6px;
  width: 100px;
  // align-items: center;
  // justify-content: center;

`;
