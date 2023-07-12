import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
const CardSearch = () => {
    const { search } = useParams();
    const [Search, setSearch] = useState(['']);
    const [isLoading, setIsLoading] = useState(true)
    const url = `https://api.themoviedb.org/3/search/movie?api_key=e7e8a528fe435faf130febeaec45f148&query=${search ? search : 'batman'}&language=en-US`
    useEffect(() => {
        fetch(url).then(resp => resp.json()).then(data => setSearch(data.results));
        setIsLoading(false)
        console.log(Search)
    }, [search])
    // useEffect(() => {
    //     fetch(url).then(resp => resp.json()).then(data => setSearch(data.results));
    // }, [])
    // "/kkjTbwV1Xnj8wBL52PjOcXzTbnb.jpg"
    return (
        <>
            <h2 className='list_title'>{`Search results: ${search}`}</h2>
            {
                isLoading ?
                    <div className='cards'>
                        <SkeletonTheme baseColor='#202020' highlightColor='#444'>
                            <Skeleton height={300} duration={2} />
                        </SkeletonTheme>
                    </div>
                    :
                    Search.map((item) => (
                        <Link to={`/movie/${item.id}`} style={{ textDecoration: 'none', color: '#fff' }}>
                            <div className="cards">
                                <div className="cards_image">
                                    <img src={`https://image.tmdb.org/t/p/original${item && item?.poster_path}`} alt="" />
                                </div>
                                <div className="cards_overlay">
                                    <div className="cards_title">
                                        {item.original_title}
                                    </div>
                                    <div className="cards_runtime">
                                        {item.release_date}
                                        <span>{item.vote_average}</span>
                                    </div>
                                    <div className="cards_description">
                                        {item?.overview?.slice(0,100) + "...."}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
            }
        </>
    )
}

export default CardSearch;