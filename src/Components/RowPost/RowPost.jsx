import React, {useEffect,useState} from 'react'
import './RowPost.css'
import YouTube from 'react-youtube';
import {Img_url,Api_key, Baseurl} from '../const/const'
import axios from 'axios'

function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [urlId,seturlId]=useState('')
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  useEffect(()=>{
    axios.get(props.url).then(response => {
      console.log(response.data)
      setMovies(response.data.results)
    })
  },[])
  const MovieTrailer=(id)=>{
    axios.get(`${Baseurl}/movie/${id}/videos?api_key=${Api_key}&language=en-US`).then(response => {
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
      }
      else{
        console.log("not Available")
      }
    })
    console.log(id)
  }
  return (
    <div className="row">
        <h2>{props.title}</h2>
        <div className="poster">
          {movies.map(obj => 
            <img onClick={()=>MovieTrailer(obj.id)} className={props.isSmall ? 'small' :"poster_img"} src={`${Img_url+obj.backdrop_path}`} alt="poster" />
          )}
        
        </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />} 
      
    </div>
  )
}

export default RowPost
