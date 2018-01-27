import React from 'react';

import {classify} from './utils';

export default class Container extends React.Component {
    render(){
        const className = classify('container', this.props.className);
        return <div className={className}>
            {this.props.children}
        </div>;
    }
}