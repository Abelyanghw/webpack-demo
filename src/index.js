import _ from 'lodash';
import './style.css';
import 'react';
import 'react-dom';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webpack'], '  ');
    return element;
}

document.body.appendChild(component());