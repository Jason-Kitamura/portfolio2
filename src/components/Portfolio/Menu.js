import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import './portfolio.css';
import './menu.css';

import BDLogo from './assets/BDLogo.png';

function Menu(){

    return(
        <div id='menu'>
            <div id='menuList'>
                <ul>
                    <li class='project'>
                        <Link to="/portfolio/project1" >
                            <p>Bernard Design</p>
                        </Link>
                        <ul class='projectList'>
                            <HashLink smooth to="/portfolio/project1/#projectHeader"><li>Home</li></HashLink>
                            <HashLink smooth to="/portfolio/project1/#aboutPage"><li>About</li></HashLink>
                            <HashLink smooth to="/portfolio/project1/#galleryPage"><li>Gallery</li></HashLink>
                            <HashLink smooth to="/portfolio/project1/#contactPage"><li>Contact</li></HashLink>
                        </ul>
                    </li>
                    <li class='project'>
                        <Link to="/portfolio/project2" >
                            <p>Project 2</p>
                        </Link>
                        <ul class='projectList'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Gallery</li>
                            <li>Contact</li>
                        </ul>
                    </li>
                    <li class='project'>
                        <Link to="/portfolio/project3" >
                            <p>Project 3</p>
                        </Link>
                        <ul class='projectList'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Gallery</li>
                            <li>Contact</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div id='menuList1'>
                <ul>
                    <li class='projectIcon'>
                        <Link to="/portfolio/" >
                            <img src={BDLogo} alt='bdlogo'></img>
                        </Link>
                        
                    </li>
                    <li class='projectIcon'>
                        <Link to="/portfolio/project2" >
                            <i class='fab fa-facebook'></i>
                        </Link>
                    </li>
                    <li class='projectIcon'>
                        <Link to="/portfolio/project3" >
                            <i class='fab fa-twitter'></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;