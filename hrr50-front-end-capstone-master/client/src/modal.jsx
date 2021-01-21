/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

const PopUp = styled.div`
  z-index: 5;
  position: absolute;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  background-color: white;
  width: 2000px;
  max-width: 100%;
  height: 1000px;
  max-height: 100%;
  overflow: visible;
  transition: .5s ease;
`;

const Close = styled.button`
  position: absolute;
  max-height: 20px;
  max-width: 70px;
  margin-top: 30px;
  margin-left: 30px;
  background-color: light gray;
  border: none;
`;

const Next = styled.button`
  position: absolute;
  margin-right: 20px;
  margin-left: 27%;
  margin-top: 225px;
`;

const Previous = styled.button`
  position: absolute;
  margin-left: 20px;
  margin-top: 225px;
`;

const Display = styled.img`
  margin-top: 5%;
  margin-left: 30%;
  margin-right: auto;
  max-width: 82vh;
  max-height: 60vh;
`;

const Modal = (props) => {
  if (props.modalOpen === false) {
    return null;
  }
  return (
    <PopUp>
      <Close onClick={(e) => {props.showModal()}}>X Close</Close>
      <Previous onClick={props.prevPicture}>{'<'}</Previous>
      <Display src={props.photos[props.currentPhoto]}></Display>
      <Next onClick={props.nextPicture}>{'>'}</Next>
    </PopUp>
  );
};

export default Modal;
