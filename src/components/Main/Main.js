import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Festival from './About/Festival/Festival';
import Team from './About/Team/Team';

class Main extends React.Component {
   
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route path='/about/festival' component={Festival} />
                    <Route path='/about/team' component={Team} />
                </Switch>
            </div>
        )
    }
}

export default Main;
