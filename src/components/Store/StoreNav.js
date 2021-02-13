import React from 'react';
import './store.css';

function StoreNav(){

    return(
            <div id='storeNav'>
                <div class='storeNavBtn'>
                    <p>Home</p>
                </div>
                <div class='storeNavBtn'>
                    <p>About</p>
                </div>
                <div class='storeNavBtn'>
                    <p>Gallery</p>
                </div>
                <div class='storeNavBtn'>
                    <p>Contact</p>
                </div>
                <div class='storeNavBtn'>
                    <i class='storeNavBtn fas fa-shopping-cart'></i>
                    {/* <div id='cartNumber'></div> */}
                </div>
            </div>
    )
}

export default StoreNav;