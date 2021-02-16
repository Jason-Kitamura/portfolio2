import React from 'react';
import './projects.css';

import bernardHome from '../assets/BHMonitor.gif';
import bernardPhone from '../assets/BHPhone.gif';
import BHFullMonitor from '../assets/BHFullMonitor.gif';
import BHFullPhone from '../assets/BHFullPhone.gif';


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
                <div class='projectDescription'>
                    
                <a target='_blank' href='https://www.bernardbuild.ca' rel='noopener noreferrer'>
                    bernardbuild.ca
                    </a>
                    <i class='fab fa-github githubLink'></i>
                    <p class='prejectDes'>Contract and Interior Design Website built using ReactJS</p>
                    <div class='row'>
                        <div class='features col-6'>
                            <p>Features</p>
                            <ul>
                                <li>Beautiful self-built slideshow homescreen</li>
                                <li>Responsive (Seperate desktop and mobile layouts)</li>
                                <li>NavBar</li>
                                <li>About Area</li>
                                <li>Gallery</li>
                                <li>Contact Form</li>
                                <li>Hosted with AWS Amplify</li>
                            </ul>
                        </div>
                        <div class='tech col-6'>
                            <p>Technology</p>
                            <ul>
                                <li>ReactJS HTML CSS Javascript</li>
                                <li>React-router-dom</li>
                                <li>Funtional components</li>
                                <li>EmailJS</li>
                                <li>AWS Amplify</li>
                                <li>Adobe Photoshop</li>
                            </ul>
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
                <div onClick={expandMonitor} id='monitorFull'>
                    <i  class='exitBtn fas fa-times'></i>
                    <img  src={BHFullMonitor}></img>
                </div>
                <div onClick={expandPhone} id='phoneFull'>
                    <i  class='exitBtn fas fa-times'></i>
                    <img  src={BHFullPhone}></img>
                </div>
        </div>
    )
}

export default Project1;