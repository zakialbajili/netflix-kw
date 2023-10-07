/* eslint-disable no-unused-vars */
import {  useState, useEffect } from 'react'
import './App.css'
import { getMovieList } from './api'

const App=()=> {
  const [popularMovies, setPopularMovies] = useState([])
  useEffect(()=>{
    getMovieList().then((result)=>{
      setPopularMovies(result)
    })
  }, [])
  const search=(q)=>{
    console.log(q)
  }
  const PopularMoviesList = ()=>{
    return popularMovies.map((movie, i)=>{
      return(
        <div className="card" style={{width: 18+"rem"}} key={i}>
          <img src={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${movie.poster_path}`} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.release_date}</p>
            <p className="card-text text-center">{movie.vote_average}</p>
          </div>
        </div>
      )
    })
  }
  return (
    <>
      <h1>Tes Netflix-kw</h1>
      <p>
        {import.meta.env.VITE_REACT_APP_BASEURL}
      </p>
      <input 
        placeholder="Cari Film" 
        type="text" 
        className="Movie-search"
        onChange={({target})=>search(target.value)}
      />
      <div className="Movie-container">
        <PopularMoviesList />
      </div>
    </>
  )
}

export default App
