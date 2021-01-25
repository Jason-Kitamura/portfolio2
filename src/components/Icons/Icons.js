import React from 'react';
import './icons.css';

function Icons(){

    return(
        <div>
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
            <div id='iconBar1' class='row'>
                
                    <div class='iconDiv1 col'>
                        <i class='fab fa-github'></i>
                    </div>
                    <div class='iconDiv1 col'>
                        <i class='fab fa-instagram'></i>
                    </div>
                    <div class='iconDiv1 col'>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </div>
                
           
        </div>
    )
}

export default Icons;