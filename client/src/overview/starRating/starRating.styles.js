/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StarDisplayContainer = styled.div`

  --star-size: 60px;
  --star-color: rgba(180,180,180);
  --star-background: #fc0;

  --percent: calc(var(--rating) / 5 * 100%);

  display: inline-block;
  font-size: var(--star-size);
  font-family: Times; // make sure ★ appears correctly
  line-height: 1;

  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  > a{
    font-size: 12pt;
  }
`;
