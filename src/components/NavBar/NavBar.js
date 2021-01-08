import React from 'react';
import './navbar.css';

function NavBar(){

    return(
        <div>
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
                <div>
                        
                    <div>
                        <i class='fa fa-bars'></i>
                        <p>Jason Kitamura</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default NavBar;