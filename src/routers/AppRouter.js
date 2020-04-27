// importing modules
import React from 'react';
import {
 BrowserRouter, Route, Switch 
} from 'react-router-dom';

// importing components
import TestPage from '../components/TestPage';

const appRouter = () => {
        const routes = (
            <Switch>   
            <Route
              path="/"
              exact
              render={() => (
                    <TestPage />
            )} 
            />
            </Switch>
        );

        return (
        <BrowserRouter>
            <div>
                {routes}
            </div>
        </BrowserRouter>
        );
};

export default appRouter;
