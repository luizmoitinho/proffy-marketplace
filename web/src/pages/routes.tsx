import React from 'react';
import { BrowserRouter, Route }  from 'react-router-dom';
import Landing from './Lading';

import ProffyList from './ProffyList';
import ProffyForm from './ProffyForm';


function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/services" component={ProffyList} />
            <Route path="/create" component={ProffyForm} />
        </BrowserRouter>
    );
}

export default Routes;
