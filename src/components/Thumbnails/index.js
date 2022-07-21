import React from "react";
import { Link } from 'react-router-dom';

import { Image } from './Thumbnails.styles';



const Thumbnails = ( props ) => (
    <div>
    { props.clickable ? (
    <Link to={`/${props.movieId}`}>
      <Image src={props.image} alt='movie-thumb' />
      </Link>
      ) : (
        <Image src={props.image} alt='movie-thumb' />
      )
      } 
  </div>
)

export default Thumbnails;