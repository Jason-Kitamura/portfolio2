import React from 'react';
import './home.css';

import Icons from '../Icons/Icons';
import NavBar from '../NavBar/NavBar';

function Home(){

    return(
        <div id='homeArea'>
            <NavBar/>
            <Icons/>
        </div>
    )
}

export default Home;