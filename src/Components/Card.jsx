import React from 'react'
import { useState, useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom'

const Card = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Fetch the movie data
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])

    return (<>
        {
            isLoading ?
                <div className='cards'>
                    <SkeletonTheme baseColor='#202020' highlightColor='#444'>
                        <Skeleton height={300} duration={2} />
                    </SkeletonTheme>
                </div>
                :
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: '#fff' }}>
                    <div className="cards">
                        <div className="cards_image">
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} alt="" />
                        </div>
                        <div className="cards_overlay">
                            <div className="cards_title">
                                {movie.original_title}
                            </div>
                            <div className="cards_runtime">
                                {movie.release_date}
                                <span>{movie.vote_average}</span>
                            </div>
                            <div className="cards_description">
                                {movie.overview.slice(0, 118) + "...."}
                            </div>
                        </div>
                    </div>
                </Link>

        }
    </>
    )
}

export default Card
