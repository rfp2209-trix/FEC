import styled from 'styled-components';

export const MetaList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 8px 0px;
`;

export const CharGrid = styled.li`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "characteristic . . . ."
    "one two three four five"
    "low-desc . mid-desc . high-desc"
`;

