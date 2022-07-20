import React, { useEffect, useState } from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

import NoImage from '../images/no_image.jpg';

import API from '../API';

import { useHomeFetch } from '../hooks/useHomeFetch';

const Home = () => {

    const { state, loading, error } = useHomeFetch();
    
    console.log(state);

    return (
        <div> Home </div>
    )
}

export default Home;