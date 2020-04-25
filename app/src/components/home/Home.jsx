import React, { Component } from 'react'
import SeriesCard from '../card/SeriesCard';
import MovieCard from '../card/MovieCard';
import { connect } from 'react-redux';
import { fetchMovies, fetchTvSeries } from '../../actions/searchAction'
import Spinner from '../spinner/Spinner';
import './home.css';
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
                    <MovieCard key={ele.id} movies={ele} />
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
                    <SeriesCard key={ele.id} series={ele} />
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
