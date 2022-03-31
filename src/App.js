import React, { Component } from "react";
import "./App.css";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div> Loading...</div>;
    }

    else {

      return (
        <div className="App">
          {/* <div class="bg_image"></div> */}
          <ul class = "Album">
            {items.map(item =>(
              <li key={item.id}>
              Album: {item.title}
              </li>
            ))};
          </ul>
        </div>
      );
    }
  }
}

export default App;
