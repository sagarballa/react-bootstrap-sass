import React from 'react';

import {classify} from './utils';

import './container.scss';

export default class Container extends React.Component {
    render(){
        const className = classify('container', this.props.className);
        return <div className={className}>
            {this.props.children}
        </div>;
    }
}