import React, { Component } from "react";
import SeriesCard from "../card/SeriesCard";
import MovieCard from "../card/MovieCard";
import * as t from "../../actions/favAction";
import { connect } from "react-redux";
import { getFevMovSers } from "../../actions/favAction";
import Spinner from "../spinner/Spinner";
import "../home/home.css";

class Favourite extends Component {
  componentWillMount = () => {
    this.props.getFevMovSers();
  };

  render() {
    const { favMovSer } = this.props;
    const { loading } = this.props;

    const mov = favMovSer.filter(ele => {
      return ele.movies_info.isMovie === true;
    });

    const ser = favMovSer.filter(ele => {
      return ele.movies_info.isMovie === false;
    });

    return (
      <div className="main-container-out">
        <div className="main-container-in container-max-width">
          <div className="tvshow-container">
            <div className="card-title">
              <h2>Favourite TV Shows</h2>
            </div>
            {!loading ? (
              <div>
                {ser.map(ele => (
                  <SeriesCard
                    key={ele.id}
                    series={ele}
                    isMovie={false}
                    isFavorite={true}
                  />
                ))}
              </div>
            ) : (
              <Spinner />
            )}

            {ser.length === 0 ? (
              <div className="empty-msg">There are no favourite series</div>
            ) : (
              ""
            )}
          </div>
          <div className="movie-container">
            <div className="card-title">
              <h2>Favourite Movies</h2>
            </div>

            {!loading ? (
              <div>
                {mov.map(ele => (
                  <MovieCard
                    key={ele.id}
                    movies={ele}
                    isMovie={true}
                    isFavorite={true}
                  />
                ))}
              </div>
            ) : (
              <Spinner />
            )}
            {mov.length === 0 ? (
              <div className="empty-msg">There are no favourite movies</div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favMovSer: state.fav.favMovieSers,
    loading: state.fav.loading
  };
};

export default connect(mapStateToProps, { getFevMovSers })(Favourite);
