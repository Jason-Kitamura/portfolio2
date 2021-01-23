import React from 'react';
import './home.css';
import bernardHome from './assets/BHMonitor.gif';
import bernardPhone from './assets/BHPhone.gif';

// import * as Icon from 'bootstrap-icons-react';
import { FaGithub } from 'react-icons/fa';

function Home(){

    return(
        <div id='homeArea'>
          <div id='backgroundArea' class='fadeIn1'></div>
          <div id='homeBody'>
              <div class='row'>
                <div id='homeScreen'>
                  <div id='homeHeader'>
                    <p>Bernard Design and Build</p>
                  </div>
                  <div class='row'>
                    <div class='col-sm-8'>
                      <img src={bernardHome} class='fadeIn'></img>
                    </div>
                    <div class='col-sm-4'>
                      <img src={bernardPhone} class='fadeIn'></img>
                    </div>
                  </div>
                </div>
                 <div id='iconBar'>
                    <div class='iconDiv'>
                      <i  class='fab fa-github'></i>
                    </div>
                    <div class='iconDiv'>
                      <i  class='fab fa-instagram'></i>
                    </div>
                    <div class='iconDiv'>
                      <i class="fab fa-linkedin-in"></i>
                    </div>
                     
                   
                    
                </div>
               </div>
                
                
          </div>
        </div>
    )
}

export default Home;