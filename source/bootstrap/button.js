import React from 'react';

import {classify} from './utils';

import './button.scss'

export default class Button extends React.Component {
    render(){
        const className = classify('btn', this.props.className);
        return <button {...this.props} className={className}>
                {this.props.children}
        </button>;
    }
}