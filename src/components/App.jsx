import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    selectedImage: '',
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearch} />
      </div>
    );
  }
}

export default App;