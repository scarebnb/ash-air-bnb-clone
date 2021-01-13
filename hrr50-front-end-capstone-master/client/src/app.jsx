import React from "react";
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false
    };
  }


  render () {
    return (
      <div>Hey look</div>
    )
  }

}



ReactDOM.render(<div><App /></div>, document.getElementById('photos'));