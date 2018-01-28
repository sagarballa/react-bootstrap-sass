import React from 'react';

import Jumbotron from './bootstrap/jumbotron';
import Button from './bootstrap/button';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './appsource.scss';

export default class App extends React.Component {
    render(){
        return <ReactCSSTransitionGroup transitionName='app' transitionAppear={true} transitionAppearTimeout={500}>
            <Jumbotron className="-fluid text-center custom">
            <h1>React with Bootstrap</h1>
            <p>with SASS</p>
            <Button className="-primary -lg" href="http://02geek.com" target="_blank">Click Here</Button>
        </Jumbotron>
        </ReactCSSTransitionGroup>;
    }
}