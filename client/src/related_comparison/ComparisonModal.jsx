import React from 'react';
import styled from 'styled-components';
import _ from 'underscore';

export default function ComparisonModal({
  isOpen, features, selectedProductFeatures, selectedProductName, comparedProductName, toggleModal,
}) {
  const pullFeatures = (obj) => {
    let result = `${obj.feature} `;
    if (obj.value) {
      result += obj.value;
    }
    return (result);
  };

  const compareFeatures = (currentProduct, comparedProduct) => {
    let length;
    const BothFeatures = {};
    BothFeatures.combined = [];
    BothFeatures.currentProduct = [];
    BothFeatures.comparedProduct = [];

    if (currentProduct.length > features.length) {
      length = currentProduct.length;
    } else {
      length = comparedProduct.length;
    }
    for (let i = 0; i < length; i += 1) {
      if (currentProduct[i]) {
        BothFeatures.combined.push(pullFeatures(currentProduct[i]));
        BothFeatures.currentProduct.push(pullFeatures(currentProduct[i]));
      }
      if (features[i]) {
        BothFeatures.combined.push(pullFeatures(comparedProduct[i]));
        BothFeatures.comparedProduct.push(pullFeatures(comparedProduct[i]));
      }
    }
    BothFeatures.combined = _.uniq(BothFeatures.combined);
    return BothFeatures;
  };
  const BothFeatures = compareFeatures(selectedProductFeatures, features);
  return (
    isOpen && (
    <>
      <ModalOverlay onClick={toggleModal} />
      <ModalContent>
        <ModalTable>
          <ModalTBody>
            <ModalTR>
              <ModalTH>
                {selectedProductName}
              </ModalTH>
              <ModalTH> </ModalTH>
              <ModalTH>
                {comparedProductName}
              </ModalTH>
            </ModalTR>
            {BothFeatures.combined.map((currFeature) => (
              <ModalTR align="center">
                <ModalTD>
                  {BothFeatures.currentProduct.includes(currFeature) ? '✅' : '❌'}
                </ModalTD>
                <ModalTD>{currFeature}</ModalTD>
                <ModalTD>
                  {BothFeatures.comparedProduct.includes(currFeature) ? '✅' : '❌'}
                </ModalTD>
              </ModalTR>
            ))}
          </ModalTBody>
        </ModalTable>
      </ModalContent>
    </>
    )
  );
}

const ModalContent = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
  z-index: 999;
`;

const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 1;
`;

const ModalTable = styled.table`
  text-align: center;
  width: 500px;
  padding: 10px;
`;

const ModalTH = styled.th`
  width: 500px;
`;

const ModalTR = styled.tr`
  width: 500px;
`;

const ModalTD = styled.td`
  width: 500px;
`;

const ModalTBody = styled.tbody`
`;
