import React, { Component } from 'react'
import Card from '../card/Card';
import { connect } from 'react-redux';
import { fetchMovies, fetchTvSeries } from '../../actions/searchAction'
import './home.css';
import Spinner from '../spinner/Spinner';

class Home extends Component {

  componentWillMount = () => {
    this.props.fetchMovies();
    this.props.fetchTvSeries();
  }

  render() {
    const { movies } = this.props;
    const { series } = this.props;
    const { movies_loading } = this.props;
    const { series_loading } = this.props;
    console.log(movies)
    return (
      <div className='main-container-out'>
        <div className='main-container-in container-max-width'>
          <div className='tvshow-container'>
            <div className='card-title'>
              <h2>Trending TV Shows</h2>
            </div>
            {!series_loading ?
              <div>
                {
                  series.map((ele) => (
                    <Card key={ele.id} name={ele.name} vote_average={ele.vote_average} poster_path={ele.poster_path} />
                  ))
                }
              </div> : <Spinner />
            }
          </div>
          <div className='movie-container'>
            <div className='card-title'>
              <h2>Trending Movies</h2>
            </div>

            {!movies_loading ?
              <div>
                {
                  movies.map((ele) =>
                    <Card key={ele.id} name={ele.title} vote_average={ele.vote_average} poster_path={ele.poster_path} />
                  )
                }
              </div>
              : <Spinner />
            }

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(typeof state.search.movies)
  return {
    movies: state.search.movies,
    series: state.search.series,
    series_loading: state.search.series_loading,
    movies_loading: state.search.movies_loading,
  }
}

export default connect(mapStateToProps, { fetchMovies, fetchTvSeries })(Home);
