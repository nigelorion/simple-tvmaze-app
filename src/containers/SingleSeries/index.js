import React, { Component } from 'react'
import Loader from '../../components/Loader';

class SingleSeries extends Component {
  state = {
    show: null
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`http://api.tvmaze.com/shows/${id}?embeded=episodes`)
      .then((res) => res.json())
      .then(data => this.setState({ show: data}))
  }
  render() {
    return (
      <div>
        {
          this.state.show === null
          &&
          <Loader />
        }
        {
          this.state.show !== null && this.state.show.image
          &&
          <div>
            <p>{this.state.show.name}</p>
            <img src={this.state.show.image.medium}/>
          </div>
        }
      </div>
    )
  }
}

export default SingleSeries;
