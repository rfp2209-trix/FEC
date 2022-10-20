import React from 'react';
import styled from 'styled-components';
import _ from 'underscore';

export default function ComparisonModal({
  children, isOpen, features, selectedProductFeatures,
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
  console.log('yeyeeyeyey', compareFeatures(selectedProductFeatures, features));
  return (
    isOpen
      ? (
        <ModalContent>
          <table>
            <tr>
              <th>current product</th>
              <th>feature name</th>
              <th>compared product</th>
            </tr>
            <tr>
              <td />
              <td />
              <td />
            </tr>

          </table>
        </ModalContent>
      )
      : null);
}

const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  border-radius: 3px;
  max-width: 600px;
  min-width: 300px;
`;
