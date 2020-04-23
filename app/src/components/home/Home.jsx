import React, { Component } from 'react'
import Card from '../card/Card';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className='main-container-out'>
                <div className='main-container-in'>
                    <div className='tvshow-container'>
                        <div className='card-title'>
                            <h2>Trending TV Shows</h2>
                        </div>
                        <div>
                            <Card></Card>
                            <Card></Card>
                        </div>
                    </div>
                    <div className='movie-container'>
                        <div className='card-title'>
                            <h2>Trending Movies</h2>
                        </div>
                        <div>
                            <Card></Card>
                            <Card></Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
