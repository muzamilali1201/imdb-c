import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Movie from './Components/Movie'
// import MovieDetails from './Components/MovieDetails'
import MoviesType from './Components/MoviesType'
import MoviesList from './Components/MoviesList'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import CardSearch from './Components/CardSearch'
import Footer from './Components/footer'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <CardSearch data={data} /> */}
      <Routes>
        <Route exact path='/' element={<MoviesList />} />
        <Route exact path='movie/:id' element={<Movie/>} />
        <Route exact path='movies/:type' element={<MoviesType />} />
        <Route exact path='movies/search/:search' element={<CardSearch />} />
        <Route exact path='/*' element={<h1>Error Page</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App