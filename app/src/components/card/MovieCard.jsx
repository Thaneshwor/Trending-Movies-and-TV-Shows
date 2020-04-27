import React, { Component } from 'react';
import { connect } from 'react-redux';
import love from '../../assets/img/love.png';
import nolove from '../../assets/img/love1.jpeg';
import './card.css';
import { delFevMovSer, setFevMovSers } from '../../actions/favAction';

class MovieCard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            favourite: false,
        }
    }

    componentDidMount = () => {
        if (this.props.isFavorite) {
            this.setState({
                favourite: true
            })
        }
    }

    changeFavImg = () => {

        this.setState({
            favourite: !this.state.favourite
        })

        if (!this.state.favourite) {
            this.props.movies.isMovie = true;
            this.props.setFevMovSers(this.props.movies);
        } else {
            alert('Are You sure')
            this.props.delFevMovSer(this.props.movies.id);
        }
    }

    render() {
        let imgUrl = '';
        let avg_voat = '';
        let title = '';
        if (!this.props.isFavorite) {
            imgUrl = `http://image.tmdb.org/t/p/w185//${this.props.movies.poster_path}`;
            avg_voat = this.props.movies.vote_average;
            title = this.props.movies.title;
        } else {
            imgUrl = `http://image.tmdb.org/t/p/w185//${this.props.movies.movies_info.poster_path}`;
            avg_voat = this.props.movies.movies_info.vote_average;
            title = this.props.movies.movies_info.title;
        }

        return (
            <div>
                <div className='card'>
                    <div className='img-card'>
                        <div className='img-card-box'>
                            <img src={imgUrl} alt='poster' />
                        </div>
                    </div>

                    <div className='desc-movie'>
                        <div className='rating-container'>
                            <div className='rating'>
                                <span className='font-20'>{avg_voat}</span><span className='font-15 secondary-text-color'>/10</span>
                            </div>
                            <div className='fav'>
                                <button className='btn-fav' onClick={this.changeFavImg}><img src={this.state.favourite ? love : nolove} alt='love' className='favourite' onMouseDown={this.changeFavourite} /></button>
                            </div>
                        </div>

                        <div className='mg-top-10'>
                            <a href='#' className='font-20 primary-text-color mg-r-10'>{title}</a>
                            <span className='font-12 secondary-text-color'>Action Movie</span>
                        </div>
                        <div className='secondary-text-color mg-top-10'>Playing on Netflix</div>
                        <div className='mg-top-10'><a href='#' className='primary-text-color'>Watch Trailer</a></div>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favs: state.favMovieSers,
    }
}
export default connect(mapStateToProps, { setFevMovSers, delFevMovSer })(MovieCard);
