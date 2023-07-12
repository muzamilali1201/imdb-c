import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LaunchIcon from '@mui/icons-material/Launch';
const Movie = () => {
  const { id } = useParams()
  const [partMovie, setPartMovie] = useState([]);
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=e7e8a528fe435faf130febeaec45f148`
  useEffect(() => {
    fetch(url).then(resp => resp.json()).then(data => setPartMovie(data))
  }, [id])
  return (
    <div className="movie">
      <div className="movie__intro">
        <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${partMovie ? partMovie.backdrop_path : ""}`} />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${partMovie ? partMovie.poster_path : ""}`} />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">{partMovie ? partMovie.original_title : ""}</div>
            <div className="movie__tagline">{partMovie ? partMovie.tagline : ""}</div>
            <div className="movie__rating">
              {partMovie ? partMovie.vote_average : ""} <i class="fas fa-star" />
              <span className="movie__voteCount">{partMovie ? "(" + partMovie.vote_count + ") votes" : ""}</span>
            </div>
            <div className="movie__runtime">{partMovie ? partMovie.runtime + " mins" : ""}</div>
            <div className="movie__releaseDate">{partMovie ? "Release date: " + partMovie.release_date : ""}</div>
            <div className="movie__genres">
              {
                partMovie && partMovie.genres
                  ?
                  partMovie.genres.map(genre => (
                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                  ))
                  :
                  ""
              }
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{partMovie ? partMovie.overview : ""}</div>
          </div>

        </div>
      </div>
      <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {
          partMovie && partMovie.homepage && <a href={partMovie.homepage} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button"><LaunchIcon fontSize='small' />Homepage</span></p></a>
        }
        {
          partMovie && partMovie.imdb_id && <a href={"https://www.imdb.com/title/" + partMovie.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button"><LaunchIcon fontSize='small' />   IMDb</span></p></a>
        }
      </div>
      <div className="movie__heading">Production companies</div>
      <div className="movie__production">
        {
          partMovie && partMovie.production_companies && partMovie.production_companies.map(company => (
            <>
              {
                company.logo_path
                &&
                <span className="productionCompanyImage">
                  <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                  <span>{company.name}</span>
                </span>
              }
            </>
          ))
        }
      </div>
    </div>
  )
}

export default Movie