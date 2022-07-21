import React from 'react';

import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

import Grid from './Grid';
import HeroImage from './HeroImage';

import { useHomeFetch } from '../hooks/useHomeFetch';

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
                <div key={movie.id} > {movie.title} </div>
            ))}
        </Grid>


        </>
    )
}

export default Home;