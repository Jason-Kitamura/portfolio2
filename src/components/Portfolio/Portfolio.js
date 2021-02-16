import React from 'react';
import { Link } from "react-router-dom";
import './portfolio.css';

import Icons from '../Icons/Icons';
import Menu from './Menu';
import Display from './Display.js';

function Portfolio(){

    function toggleMenu(){
        document.getElementById('menu').classList.toggle('active');
        document.getElementById('menuList').classList.toggle('active');
        document.getElementById('menuList1').classList.toggle('active');
        document.getElementById('display').classList.toggle('active');

    }

    return(
        <div id='portfolioArea' >
           
            <div id='header'>
                <div id='backBtn'>
                    <Link to="/" >
                        <i class='fas fa-arrow-left'></i>
                    </Link>
                </div>
                <div id='title'>
                    <p>Coding Portfolio</p>
                </div> 
            </div>
            
            <i id='menuBtn' class='fa fa-bars' onClick={toggleMenu}></i>
            <Menu/>
            <Display/>
        </div>
    )
}

export default Portfolio;