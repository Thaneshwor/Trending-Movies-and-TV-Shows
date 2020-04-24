import React, { Component } from 'react';
import Img from '../../assets/img/rock.jpeg';
// import { getImageUrl, getImdbLink, getYoutubeLink } from '../../utils/utils';
import love from '../../assets/img/love.png';
import nolove from '../../assets/img/love1.jpeg';
import './card.css';

class Card extends Component {

    constructor(props) {
        super(props)

        this.state = {
            favourite: true
        }
    }

    changeFavImg = () => {
        let val = this.state.favourite;
        console.log(val, ' this is the real value-------')
        this.setState({
            favourite: !this.state.favourite
        })
    }
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='img-card'>
                        <div className='img-card-box'>
                            <img src={`http://image.tmdb.org/t/p/w185//${this.props.poster_path}`} alt='poster' />
                        </div>
                    </div>

                    <div className='desc-movie'>
                        <div className='rating-container'>
                            <div className='rating'>
                                <span className='font-20'>{this.props.vote_average}</span><span className='font-15 secondary-text-color'>/10</span>
                            </div>
                            <div className='fav'>
                                <button className='btn-fav' onClick={this.changeFavImg}><img src={this.state.favourite ? nolove : love} alt='love' className='favourite' onMouseDown={this.changeFavourite} /></button>
                            </div>
                        </div>

                        <div className='mg-top-10'>
                            <a href='#' className='font-20 primary-text-color mg-r-10'>{this.props.name}</a>
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

export default Card;
