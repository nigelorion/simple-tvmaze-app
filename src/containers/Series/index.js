import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList'
import Loader from '../../components/Loader';
import Intro from '../../components/Intro'

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false
  }

  componentDidMount() {

  }

  seriesOnChange = e => {
    this.setState({seriesName: e.target.value, isFetching: true})
    fetch('http://api.tvmaze.com/search/shows?q=' + e.target.value)
      .then((res) => res.json())
      .then(data => this.setState({ series: data, isFetching: false}))
  }

  render() {
    return(
      <div>
        <Intro message="here you can find all of your most loved series"/>
        <div>
          <input value={this.state.seriesName} type="text" onChange={this.seriesOnChange}/>
        </div>
        {
          !this.state.isFetching && this.state.series.length === 0 && this.state.seriesName === ""
          &&
          <p>please enter a series</p>
        }
        {
          !this.state.isFetching && this.state.series.length === 0 && this.state.seriesName !== ""
          &&
          <p>no series have been found</p>
        }
        {
          this.state.isFetching
          &&
          <Loader />
        }
        {
          this.state.isFetching === false
          &&
          <SeriesList list={this.state.series}/>
        }

      </div>
    )
  }
}

export default Series
