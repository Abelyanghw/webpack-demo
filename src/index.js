import _ from 'lodash';
import './style.css';
import 'react';
import 'react-dom';

import { bake } from './shake';
import component from './component';
/*function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'webpack'], '  ');
    return element;
}*/
bake();
document.body.appendChild(component());