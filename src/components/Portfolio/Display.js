import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './portfolio.css';

import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';


function Display(){

    return(
        <div id='display'>
            <div id='displayArea'>
                <Switch>
                    <Route path={["/portfolio/project2"]} component={Project2} />
                    <Route path={["/portfolio/project3"]} component={Project3} />
                    <Route path={["/portfolio"]} component={Project1} />
                </Switch>
            </div>
        </div>
    )
}

export default Display;