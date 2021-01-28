import React from 'react';
import '../portfolio.css';

import bernardHome from '../assets/BHMonitor.gif';
import bernardPhone from '../assets/BHPhone.gif';

function Project1(){

    function expandMonitor(){
        document.getElementById('monitorFull').classList.toggle('active');
    }
    function expandPhone(){
        document.getElementById('phoneFull').classList.toggle('active');
    }

    return(
        <div id='project1'>
            <div id='projectHeader'>
                    <div id='projectTitle'>
                        <p>{`Bernard Design & Build`}</p>
                    </div>
                </div>
                <div id='gifArea'>
                    <div id='gifRow'>
                        <div  class='row'>
                            <div class='col-9'>
                                <img onClick={expandMonitor} src={bernardHome} id='monitorGif'class='fadeIn'></img>
                            </div>
                            <div class='col-3'>
                                <img onClick={expandPhone}src={bernardPhone} id='phoneGif' class='fadeIn'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='fillerSpot'>

                
                <ul>
                    <li>hi</li>
                    <li>hey</li>
                    <li>hello</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hey</li>
                    <li>hello</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hey</li>
                    <li>hello</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hey</li>
                    <li>hello</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hey</li>
                    <li>hello</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hey</li>
                    <li>hello</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hey</li>
                    <li>hello</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hey</li>
                    <li>hello</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hey</li>
                    <li>hello</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hey</li>
                    <li>hello</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hey</li>
                    <li>hello</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hey</li>
                    <li>hello</li>
                    <li>hi</li>
                    <li>hi</li>
                    <li>hey</li>
                    <li>hello</li>
                    <li>hi</li>
                </ul>
                </div>
                <div id='monitorFull'>
                    <i onClick={expandMonitor} class='exitBtn fas fa-times'></i>
                    <img  src={bernardHome}></img>
                </div>
                <div id='phoneFull'>
                    <i onClick={expandPhone} class='exitBtn fas fa-times'></i>
                    <img  src={bernardPhone}></img>
                </div>
        </div>
    )
}

export default Project1;