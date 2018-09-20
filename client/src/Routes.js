import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './views/Home';
import Signup from './views/Signup';
import Mesas from './views/Mesas';
import Confirmacion from './views/Confirmacion';
import Rotaciones from './views/Rotaciones';

const Routes = () => (
     <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={Signup} />
                <Route path="/rotaciones" component={Rotaciones} />
                <Route path="/mesas" component={Mesas} />
                <Route path="/confirmacion" component={Confirmacion} />
            </div>
        </BrowserRouter>
    );

export default Routes;