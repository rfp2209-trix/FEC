import styled from 'styled-components';

export const GridSpan = styled.span`
  grid-area: ${(props) => props.area};
  justify-self: ${(props) => (props.justify ? props.justify : 'center')};
  white-space: nowrap;
  overflow: visible;
`;

export const ReviewsFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const ReviewsListContainer = styled.div`
  width: 50%;
`;

export const ReviewTileList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 8px 0px ;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
