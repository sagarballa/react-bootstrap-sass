import React from 'react';

import Container from './container';

import {classify} from './utils';

import './jumbotron.scss';

export default class Jumbotron extends React.Component {
    render(){
        const className = classify('jumbotron', this.props.className);
        return <div className={className}>
            <Container className="-fluid">
                {this.props.children}
            </Container>
        </div>;
    }
}