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

const SlideOut = keyframes`
from {
  margin-top: 0%;
  height: 100%;
}

to {
  margin-top: 100%;
  height: 300%;
}
`;

const PopUp = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 20px auto auto auto auto auto auto auto 20px 40px 40px;
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
  animation: 500ms ${(props) => props.modalOpen === false ? SlideOut : SlideUp};
`;

const FadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
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
  margin: auto;
  border-radius: 15%;
  background-color: light gray;
  border: none;
  vertical-align: bottom;
`;

const Position = styled.span`
  grid-column-start: 7;
  grid-column-end: span 1;
  grid-row-start: 2;
  grid-row-end: span 1;
  margin: auto;
  vertical-align: bottom;
  font-size: 18px;
`;

const Next = styled.button`
  position: relative;
  grid-column-start: 12;
  grid-column-end: span 1;
  grid-row-start: 4;
  grid-row-end: span 1;
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: scale-down;
  border-width: thin;
  background-color: white;
  cursor: pointer;
  outline: 0;
  &:hover {
    background-color: gray;
  }
`;

const Previous = styled.button`
  position: relative;
  grid-column-start: 2;
  grid-column-end: span 1;
  grid-row-start: 4;
  grid-row-end: span 1;
  width: 50px;
  height: 50px;
  margin: auto;
  border-radius: 50%;
  object-fit: scale-down;
  border-width: thin;
  background-color: white;
  cursor: pointer;
  outline: 0;
  &:hover {
    background-color: gray;
  }
`;

const Add = styled.img`
max-height: 16px;
max-width: 16px;
margin: auto;
grid-column-start: 12;
grid-column-end: span 1;
grid-row-start: 2;
grid-row-end: span 1;
color: rgb(113, 113, 113);
display: inline;
`;

const Share = styled.img`
grid-column-start: 11;
grid-column-end: span 1;
grid-row-start: 2;
grid-row-end: span 1;
max-height: 16px;
max-width: 16px;
margin: auto;
display: inline;
`;

const Display = styled.img`
grid-column-start: 5;
grid-column-end: span 5;
grid-row-start: 3;
grid-row-end: span 4;
object-fit: scale-down;
margin: 0 auto 0 auto;
max-height: 60vh;
animation: ${FadeIn} ease 2s;
`;

const Modal = (props) => {
  if (props.modalOpen === false) {
    return null;
  }

  // ternary condition

  return (
    <PopUp>
      <Close onClick={(e) => {props.showModal()}}>X Close</Close>
      <Position>
        {props.currentPhoto + 1} / {props.photos.length}
      </Position>
      <Add src="https://cdn2.iconfinder.com/data/icons/4web-3/139/favourite-512.png"></Add>
      <Share src="https://www.pngfind.com/pngs/m/78-782308_png-file-share-icon-ios-png-transparent-png.png"></Share>
      {props.currentPhoto === 0 ? null : (<Previous onClick={props.prevPicture}>{'<'}</Previous>)}
      <Display src={props.photos[props.currentPhoto]}></Display>
      {props.currentPhoto === props.photos.length -1 ? null : (<Next onClick={props.nextPicture}>{'>'}</Next>)}
    </PopUp>
  );
};

export default Modal;
