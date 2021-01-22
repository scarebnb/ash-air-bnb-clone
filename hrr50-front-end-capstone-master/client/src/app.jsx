/* eslint-disable react/button-has-type */
/* eslint-disable no-plusplus */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Title from './title.jsx';
import Modal from './modal.jsx';
import styled from 'styled-components';

const Dots = styled.img`
  height: 15px;
  width: 15px;
  margin: auto 5px 0px auto;

`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      property: {},
      photos: [],
      currentPhoto: 0,
    };
    this.renderImageContent = this.renderImageContent.bind(this);
    this.showModal = this.showModal.bind(this);
    this.nextPicture = this.nextPicture.bind(this);
    this.prevPicture = this.prevPicture.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: '/photos',
    }).then((data) => {
      const photoArray = [];
      const property = {
        name: null,
        location: null,
        favorites: null,
      };
      for (let i = 0; i < data.data.length; i++) {
        property.name = data.data[0].name;
        property.location = data.data[0].location;
        property.favorites = data.data[0].favorites;
        photoArray.push(data.data[i].photoURL);
      }
      this.setState({
        property,
        photos: photoArray,
      });
    });
  }

  nextPicture() {
    if (this.state.currentPhoto !== this.state.photos.length - 1) {
      this.setState({
        currentPhoto: this.state.currentPhoto + 1,
      });
    } else {
      console.log('end of carousel, not a valid click');
    }
  }

  prevPicture() {
    if (this.state.currentPhoto !== 0) {
      this.setState({
        currentPhoto: this.state.currentPhoto - 1,
      });
    } else {
      console.log('start of carousel, not a valid click');
    }
  }

  showModal() {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
    if (this.state.modalOpen === true) {
      this.setState({
        currentPhoto: 0,
      });
    }
  }

  openModal(e, index) {
    this.setState({ currentPhoto: index });
    this.showModal();
  }

  // eslint-disable-next-line class-methods-use-this
  renderImageContent(src, index) {
    return (
      <div className={`gallery-child${index}`}
      onClick={(e) => this.openModal(e, index)}>
        <img className="photo" src={src} key={src} />
      </div>
    );
  }

  render() {
    const displayImages = this.state.photos.slice(0, 5);
    return (
      // <div className="info">Hello</div>
      <div>
        <Title property={this.state.property} />
        <div className="gallery-grid">
          {displayImages.map(this.renderImageContent)}
          <button
            id="submit"
            onClick={(e) => {
              this.showModal();
            }}>
            <Dots src="https://lh3.googleusercontent.com/proxy/OiwrMASYxmaO5Rd647dux4b7P20fZ2R27FmMkvQABSyf5-OfTyhMXHxsb-NafVHnhZHD-WcLHBKaYzToZSmHTZ5LYj6cV_VzDPv_YkED1GeT"></Dots>
            Show All Photos
          </button>
        </div>
        <Modal currentPhoto={this.state.currentPhoto} photos={this.state.photos} modalOpen={this.state.modalOpen} showModal={this.showModal} nextPicture={this.nextPicture} prevPicture={this.prevPicture} />
      </div>
    );
  }
}

ReactDOM.render(<div><App /></div>, document.getElementById('photos'));
