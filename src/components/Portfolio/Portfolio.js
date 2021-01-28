import React from 'react';
import './portfolio.css';
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
            <i id='menuBtn' class='fa fa-bars' onClick={toggleMenu}></i>
            <Menu/>
            <Display/>
        </div>
    )
}

export default Portfolio;