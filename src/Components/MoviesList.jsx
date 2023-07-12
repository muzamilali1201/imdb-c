import React, { useState } from 'react'
import { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Stack, Box } from '@mui/material';
import { Link } from 'react-router-dom';


const MoviesList = () => {
    const [PopularMovies, SetPopularMovies] = useState([])
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=e7e8a528fe435faf130febeaec45f148"
    useEffect(() => {
        fetch(url).then(resp => resp.json()).then(data => SetPopularMovies(data.results))
    }, [])
    return (

        <Stack>
            <Carousel
                infiniteLoop={true}
                autoPlay={true}
                transitionTime={3}
                showStatus={false}
                showThumbs={false}>
                {
                    PopularMovies.map((movie) => (
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={`movie/:${movie.id}`}>
                            <div className='poster_image'>
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                            </div>
                            <div className='poster_image_overlay'>
                                <div className='title'>{movie ? movie.original_title : ""}</div>
                                <div className='runtime'>
                                    {movie ? movie.release_date : ""}
                                    <div className='ratings'>
                                        {movie ? movie.vote_average : ""}
                                    </div>
                                </div>
                                <div className='description'>
                                    {movie ? movie.overview : ""}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </Carousel>
        </Stack>
    )
}

export default MoviesList