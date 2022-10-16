/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ThumbnailDetailScroll = styled.section`
  display: flex;
  flex-direction: column;
  // flex: 0 0 100%;
  scroll-snap-align: start;
  // overflow-y: scroll;

`;

export const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 300px;
`;
