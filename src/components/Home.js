import React from 'react';

import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../config';

import HeroImage from './HeroImage';



import { useHomeFetch } from '../hooks/useHomeFetch';
import NoImage from '../images/no_image.jpg';

import Grid from './Grid';
import Thumbnails from './Thumbnails';
import Spinner from './Spinner';

const Home = () => {

    const { 
        state,
        loading,
        error
        } = useHomeFetch();
    
    console.log(state);

    return (
        <> 
        {state.results[0] ? (
        <HeroImage 
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        /> 
        ) : null}
        <Grid header='Popular Movies'>
            {state.results.map(movie => (
            <Thumbnails
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
            ))}
        </Grid>
        <Spinner />

        </>
    )
}

export default Home;