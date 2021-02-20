import 'bootstrap/dist/css/bootstrap.min.css';
import React, { lazy, Suspense, } from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import AppLayout from "../../HOC/AppLayout";
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
const Home = lazy(() => import('../../Containers/Home/index'));
const App = () => {
return (
    <div className="car-container">
        <AppLayout>
            <Suspense
                fallback={
                    <Backdrop open>
                        <CircularProgress />
                    </Backdrop>
                }
            >
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>

            </Suspense>
        </AppLayout>

    </div>
)

}

export default App;
