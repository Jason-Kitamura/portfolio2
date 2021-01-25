import React from 'react';
import './navbar.css';

function NavBar(){

    return(
        <div id='nav'>
            <div id='navArea'>
                <div class='row'>
                    <div id='leftNav' class='col-4 sideNav'>
                        <div class='row'>
                            <div class='col-6'>
                                <p>Home</p>
                            </div>
                            <div class='col-6'>
                                <p>Portfolio</p>
                            </div>
                        </div>
                    </div>
                    <div id='centerNav' class='col-4'>
                        <p>Jason Kitamura</p>
                        
                    </div>
                    <div id='rightNav' class='col-4 sideNav'>
                        <div class='row'>
                            <div class='col-6'>
                                <p>Art Store</p>
                            </div>
                            <div class='col-6'>
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='navArea1'>
                <p>Jason Kitamura</p>
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