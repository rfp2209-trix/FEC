/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MainImage = styled.section`
 height: 750px;
 width: 750px;

  > img{
    object-fit: cover;
    height: 100%;
    width: 100%;
    object-position: 100% 25;
  }
`;
