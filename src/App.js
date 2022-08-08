import axios from 'axios';
import React from 'react';
import './App.css';
import SearchBar from './component/search';
import usplash from '../src/api/unsplash'
import { ImgList } from './component/imglist';

class App extends React.Component {
  state = { images: [] }

  // api callback function
  onSearchSubmit = async (term) => {
    const res = await usplash.get('/search/photos', {
      params: { query: term },
    })

    console.log(res.data.results)
    // then method e return nya ang promise na data
    // .then(res => {
    //   console.log(res.data.results)
    // })
    this.setState({ images: res.data.results})
  }

  render() {
    return (
      <div className="App">
        <div 
          className="ui container"
          style={{ marginTop: '10px' }}
        >
          <SearchBar onSubmit={this.onSearchSubmit} />  
          {/* Found: {this.state.images.length} images */}
          <ImgList images={this.state.images} />
        </div>
      </div>
    )
  }
}

export default App;