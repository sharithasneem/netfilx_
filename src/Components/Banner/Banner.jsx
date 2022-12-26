import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Api_key,Img_url, Baseurl} from '../const/const'
import "./Banner.css";



function Banner() {
  const [movie,setMovie]=useState()
  
  useEffect(() =>{
    console.log("check")
    axios.get(`${Baseurl}/trending/all/week?api_key=${Api_key}&language=en-US`).then((response) =>{
      const array_size=response.data.results.length;
      let index_val=Math.floor(Math.random() *array_size);
      setMovie(response.data.results[index_val])
      console.log("hello",response.data.results[index_val]);
      console.log(response.data)
    })
  },[])
  
  return (
    
    <div  style={{backgroundImage: `url(${movie? Img_url+movie.backdrop_path:""})`}} className="banner">
      <div className="content">
            <h1 className="title">{movie?movie.title:""}</h1>
        <div className="banner_buttons">
            <buttons className="button">Play</buttons>
            <buttons className="button">My list</buttons>
            <h1 className="Discription">{movie? movie.overview: ""}</h1>
        </div>

      </div>
      <div className="fade"></div>

    </div> 
  )
}

export default Banner
