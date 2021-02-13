import React from 'react';
import './store.css';

import StoreNav from './StoreNav.js';
import Gallery from './Gallery.js';

function Store(){

    return(
        <div id='store'>
          <div id='storeArea'>
            <StoreNav/>
            <Gallery/>
          </div>
        </div>
    )
}

export default Store;