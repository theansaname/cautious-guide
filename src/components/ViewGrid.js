import React, { Component } from 'react';
import './ViewGrid.css';

class ViewGrid extends Component {
  render() {
    if(!this.props.value) {
      return (
        <div>Gifs comming soon</div>
      );
    }

    if( this.props.value.length === 0) {
      return (
        <div>No Gifs, wah wah</div>
      );
    }

    return(
      <div className="grid-container">
      {(this.props.value).map((gifItem) => {
          return (
            <img className='grid-image' key={gifItem.bitly_gif_url} src={gifItem.images.preview_gif.url} alt=""/>
          );
        })
      }
      </div>
    );
  }
}

export default ViewGrid;