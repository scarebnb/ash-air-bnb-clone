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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      property: {},
      photos: [],
    };
    this.renderImageContent = this.renderImageContent.bind(this);
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

  showModal() {
    this.setState({
      modalOpen: true,
    });
  }

  openModal(e, index) {
    // this.setState({ currentIndex: index });
    console.log("clicked!")
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
            Show All Photos
          </button>
        </div>
        <Modal photos={this.state.photos} modalOpen={this.state.modalOpen} />
      </div>
    );
  }
}

ReactDOM.render(<div><App /></div>, document.getElementById('photos'));
