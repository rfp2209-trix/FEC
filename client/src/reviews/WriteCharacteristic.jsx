import React from 'react';
import styled from 'styled-components';
import { charMeaning } from '../../helpers.js';

function WriteCharacteristic({
  char, charID, formData, setFormData,
}) {
  const { characteristics } = formData;
  return (
    <ListGrid>
      <GridSpan justify="start" area="characteristic">
        {char}
        :
      </GridSpan>
      <GridSpan justify="start" area="descriptor">
        {document.querySelector(`input[name="write_${char}"]:checked`) ? charMeaning[char][document.querySelector(`input[name="write_${char}"]:checked`).value - 1] : 'none selected'}
      </GridSpan>
      <RadioGrid
        id={`${char}_radio`}
        onChange={(e) => {
          characteristics[charID] = Number(e.target.value);
          setFormData({ ...formData });
        }}
      >
        <StyledRadio id={`${char}1`} type="radio" name={`write_${char}`} value="1" area="one" />
        <StyledRadio id={`${char}2`} type="radio" name={`write_${char}`} value="2" area="two" />
        <StyledRadio id={`${char}3`} type="radio" name={`write_${char}`} value="3" area="three" />
        <StyledRadio id={`${char}4`} type="radio" name={`write_${char}`} value="4" area="four" />
        <StyledRadio id={`${char}5`} type="radio" name={`write_${char}`} value="5" area="five" />
        <GridSpan area="start" justify="start">
          {charMeaning[char][0]}
        </GridSpan>
        <GridSpan area="end" justify="end">
          {charMeaning[char][4]}
        </GridSpan>
      </RadioGrid>
    </ListGrid>
  );
}
export default WriteCharacteristic;
const ListGrid = styled.li`
  display: grid;
  grid-template-columns: 70px 300px;
  grid-template-rows: auto;
  grid-template-areas:
    "characteristic descriptor"
    "anotherBlank options";
  justify-items: start;
  margin: 0px 0px 10px ;
`;
const RadioGrid = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  display: grid;
  grid-template-columns: 40px repeat(5, 30px) 40px;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "blankStart one two three four five blankEnd"
    "start start blank blank blank end end";
  justify-items: center;
  justify-content: start;
`;
const StyledRadio = styled.input`
  grid-area: ${(props) => props.area};
`;
const GridSpan = styled.span`
  grid-area: ${(props) => props.area};
  justify-self: ${(props) => (props.justify ? props.justify : 'center')};
  white-space: nowrap;
  overflow: visible;
`;
