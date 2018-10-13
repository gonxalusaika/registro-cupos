import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './views/Home';
import Signup from './views/Signup';
import Confirmacion from './views/Confirmacion';
import Rotaciones from './views/Rotaciones';
import Resumen from './views/Resumen';
import ListaMesas from './views/ListaMesas';

const Routes = () => (
     <BrowserRouter>
            <div style={{paddingTop:'20px'}}>
                <Route exact path="/" component={Home} />
                {/* <Route path="/signup" component={Signup} />
                <Route path="/rotaciones" component={Rotaciones} />
                <Route path="/confirmacion" component={Confirmacion} />
                <Route path="/resumen" component={Resumen} /> */}
                <Route path="/mesas" component={ListaMesas} />
            </div>
        </BrowserRouter>
    );

export default Routes;