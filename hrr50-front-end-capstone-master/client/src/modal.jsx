/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const Modal = (props) => {
  // add hook for current displayed photo
  // arrows change up or down the current photo index
  // arrows should render dynamically based on if it's first or last

  if (props.modalOpen === false) {
    return null;
  }
  return (
    <div className="image-carousel">
      hello world
    </div>
  );
};

export default Modal;
