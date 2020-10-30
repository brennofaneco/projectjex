import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cards from './components/Cards';

const Routes = () => {''
   return (
      <BrowserRouter>
         <Route path="/" exact component={Cards} />
      </BrowserRouter>
   );
}

export default Routes;