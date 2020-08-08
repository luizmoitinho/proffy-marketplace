import React from 'react';
import { BrowserRouter, Route }  from 'react-router-dom';
import Landing from './Lading';

import ProffyList from './ProffyList';
import ProffyForm from './ProffyForm';


function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={ProffyList} />
            <Route path="/give-classes" component={ProffyForm} />
        </BrowserRouter>
    );
}

export default Routes;
