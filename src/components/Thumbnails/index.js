import React from "react";

import { Image } from './Thumbnails.styles';



const Thumbnails = ( props ) => (
    <div>
    
        <Image src={props.image} alt='movie-thumb' />
     
  </div>
)

export default Thumbnails;