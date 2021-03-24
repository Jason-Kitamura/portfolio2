import React from 'react';
import './projects.css';



import HomeMonitor from '../assets/BHMonitor.gif';
import HomePhone from '../assets/HomePhone.gif';
import AboutMonitor from '../assets/AboutMonitorGif.gif';
import AboutPhone from '../assets/AboutPhoneGif.gif';
import GalleryMonitor from '../assets/GalleryMonitorGif.gif';
import GalleryPhone from '../assets/GalleryPhoneGif.gif';
import ContactMonitor from '../assets/ContactMonitorGif.gif';
import ContactPhone from '../assets/ContactPhoneGif.gif';


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
                        <p>{`Bernard Design & Build`}</p>
                </div>
                <div class='gifArea'>
                   <div class='gifMonitor'>
                        <img src={HomeMonitor} atl='about monitor'></img>
                   </div>
                   <div class='gifPhone'>
                        <img src={HomePhone} alt='about phone gif'></img>
                   </div>
                </div>
                <div class='projectDescription'>
                    
                    <a target='_blank' href='https://www.bernardbuild.ca' rel='noopener noreferrer'>
                        bernardbuild.ca
                    </a>
                    <a target='_blank' href='https://github.com/Jason-Kitamura/Bernard_Design' rel='noopener noreferrer'>
                        <i class='fab fa-github githubLink'></i>
                    </a>
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
               <div class='projectTitle' id='aboutPage'>
                    About Page
               </div>
               <div class='gifArea'>
                   <div class='gifMonitor'>
                        <img src={AboutMonitor} atl='about monitor'></img>
                   </div>
                   <div class='gifPhone'>
                        <img src={AboutPhone} alt='about phone gif'></img>
                   </div>
                </div>
                <div class='projectDescription'>
                    <a target='_blank' href='https://www.bernardbuild.ca/about' rel='noopener noreferrer'>
                        bernardbuild.ca/about
                    </a>
                    <a target='_blank' href='https://github.com/Jason-Kitamura/Bernard_Design/tree/master/src/components/About' rel='noopener noreferrer'>
                        <i class='fab fa-github githubLink'></i>
                    </a>
                    <p>Features</p>
                        <ul>
                            <li>Business Description</li>
                            <li>Gallery SlideShow</li>
                            <li>Drop down leaf with instagram link</li>
                        </ul>
               </div>
               <div class='projectTitle' id='galleryPage'>
                    Gallery Page
               </div>
               <div class='gifArea'>
                   <div class='gifMonitor'>
                        <img src={GalleryMonitor} atl='about monitor'></img>
                   </div>
                   <div class='gifPhone'>
                        <img src={GalleryPhone} alt='about phone gif'></img>
                   </div>
                </div>
                <div class='projectDescription'>
                    
                    <a target='_blank' href='https://github.com/Jason-Kitamura/Bernard_Design/tree/master/src/components/gallery' rel='noopener noreferrer'>
                        bernardbuild.ca/gallery
                    </a>
                    <a target='_blank' href='https://github.com/Jason-Kitamura/Bernard_Design' rel='noopener noreferrer'>
                        <i class='fab fa-github githubLink'></i>
                    </a>
                    <p>Features</p>
                        <ul>
                            <li>Gallery Main Page and Photo Gallery</li>
                            <li>CSS Grid</li>
                            <li>Drop down leaf with instagram link</li>
                            <li>Photo Gallery made with npm react-photo-gallery</li>
                            <li>Full screen viewing option</li>
                            <li>Photo Captions in full screen</li>
                        </ul>
                
               </div>
               <div class='projectTitle' id='contactPage'>
                    Contact Page
               </div>
                <div class='gifArea'>
                   <div class='gifMonitor'>
                        <img src={ContactMonitor} atl='about monitor'></img>
                   </div>
                   <div class='gifPhone'>
                        <img src={ContactPhone} alt='about phone gif'></img>
                   </div>
                </div>
                <div class='projectDescription'>
                    <a target='_blank' href='https://www.bernardbuild.ca/contact' rel='noopener noreferrer'>
                        bernardbuild.ca/contact
                    </a>
                    <a target='_blank' href='https://github.com/Jason-Kitamura/Bernard_Design/tree/master/src/components/contactForm' rel='noopener noreferrer'>
                        <i class='fab fa-github githubLink'></i>
                    </a>
                    <p>Features</p>
                        <ul>
                            <li>Contact form</li>
                            <li>Email sent with Email.JS</li>
                            <li>Error handling name, email, message</li>
                            <li>Toastr error and success Notifications</li>
                        </ul>
               </div>
          
                <div onClick={expandMonitor} id='monitorFull'>
                    <i  class='exitBtn fas fa-times'></i>
                    <img  src={HomeMonitor}></img>
                </div>
                <div onClick={expandPhone} id='phoneFull'>
                    <i  class='exitBtn fas fa-times'></i>
                    <img  src={HomePhone}></img>
                </div>
        </div>
    )
}

export default Project1;