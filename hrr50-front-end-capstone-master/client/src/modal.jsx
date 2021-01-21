/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const SlideUp = keyframes`
from {
  margin-top: 100%;
  height: 300%;
}

to {
  margin-top: 0%;
  height: 100%;
}
`;

const PopUp = styled.div`
  display: grid;
  grid-template-columns: 40px 40px auto auto auto auto auto auto auto auto auto 40px 40px;
  grid-template-rows: auto auto auto auto auto auto auto;
  grid-gap: 0px;
  z-index: 5;
  position: absolute;
  top: 0%;
  left: 0%;
  background-color: white;
  width: 2000px;
  max-width: 100vw;
  height: 1000px;
  max-height: 100vh;
  overflow: visible;
  animation: 1s ${SlideUp};
`;

const Close = styled.button`
  position: relative;
  grid-column-start: 2;
  grid-column-end: span 2;
  grid-row-start: 2;
  grid-row-end: span 1;
  height: 40px;
  width: 80px;
  font-size: 15px;
  border-radius: 15%;
  background-color: light gray;
  border: none;
`;


const Next = styled.button`
  position: relative;
  grid-column-start: 12;
  grid-column-end: span 1;
  grid-row-start: 4;
  grid-row-end: span 1;
  margin: auto;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: scale-down;
  border-width: thin;
`;

const Previous = styled.button`
  position: relative;
  grid-column-start: 2;
  grid-column-end: span 1;
  grid-row-start: 4;
  grid-row-end: span 1;
  width: 40px;
  height: 40px;
  margin: auto;
  border-radius: 50%;
  object-fit: scale-down;
  border-width: thin;
`;

const Display = styled.img`
grid-column-start: 5;
grid-column-end: span 5;
grid-row-start: 2;
grid-row-end: span 5;
object-fit: scale-down;
margin: auto;
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
