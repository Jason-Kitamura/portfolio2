import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

import Signature from './assets/jasonKitamura.png'

function NavBar(){

    return(
        <div id='nav'>
            <div id='navArea'>
                <div class='row'>
                    <div id='leftNav' class='col-4 sideNav'>
                        <div class='row'>
                            <div class='col-6'>
                                <Link to="/" >
                                    <p>Home</p>
                                </Link>
                            </div>
                            <div class='col-6'>
                                <Link to="/portfolio" >
                                    <p>Portfolio</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div id='centerNav' class='col-4'>
                        <img src={Signature}></img>
                        
                    </div>
                    <div id='rightNav' class='col-4 sideNav'>
                        <div class='row'>
                            <div class='col-6'>
                                <Link to="/store" >
                                    <p>Art Store</p>
                                </Link>
                            </div>
                            <div class='col-6'>
                                <Link to="/contact" >
                                    <p>Contact</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='navArea1'>
                <img src={Signature}></img>
                <div id='smlNav' class='row'>
                    <div class='col-3'>
                        <p>Home</p>
                    </div>
                    <div class='col-3'>
                        <p>Portfolio</p>
                    </div>
                    <div class='col-3'>
                        <p>Art Store</p>
                    </div>
                    <div class='col-3'>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
        </div>     
    )
}

export default NavBar;