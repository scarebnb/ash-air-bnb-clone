import React from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      property: {},
      photos: []
    };
    this.renderImageContent = this.renderImageContent.bind(this);
  }

  componentDidMount () {
    axios({
      method: 'get',
      url: '/photos'
    }).then((data) => {
      const photoArray = []
      const property ={
        name: null,
        location: null,
        favorites: null
      }
      for (let i = 0; i < data.data.length; i ++) {
        property.name = data.data[0].name;
        property.location = data.data[0].location;
        property.favorites = data.data[0].favorites;
        photoArray.push(data.data[i].photoURL)
      }
      this.setState({
        property: property,
        photos: photoArray
      })
    });
  }

  renderImageContent(src, index) {
    return (
      <div className={`gallery-child${index}`} >
        <img className={'photo'} src={src} key={src} />
        <div className={'overlay'}></div>
      </div>
    )
  }




  render () {
    const displayImages = this.state.photos.slice(0, 5)
    return (
      // <div className="info">Hello</div>
      <div>
      <div className="info">{this.state.property.name}</div>
      <div className="gallery-grid">
      {displayImages.map(this.renderImageContent)}
    </div>
      </div>
    )
  }

}



ReactDOM.render(<div><App /></div>, document.getElementById('photos'));