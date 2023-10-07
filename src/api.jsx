/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
const apiKey= import.meta.env.VITE_REACT_APP_APIKEY
const base = import.meta.env.VITE_REACT_APP_BASEURL
export const getMovieList = async()=>{
      const {data} = await axios (`${base}/movie/popular?api_key=${apiKey}`)
      return data.results
}
export const searchMovie = async(q)=>{
    const search = await axios.get(q)
    return   
}