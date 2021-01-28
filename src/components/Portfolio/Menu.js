import React from 'react';
import { Link } from "react-router-dom";

import './portfolio.css';
import './menu.css';

function Menu(){

    return(
        <div id='menu'>
            <div id='menuList'>
                <ul>
                    <li class='project'>
                        <Link to="/portfolio/project1" >
                            <p>Project1</p>
                        </Link>
                        <ul class='projectList'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Gallery</li>
                            <li>Contact</li>
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
                            <i class='fab fa-amazon'></i>
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