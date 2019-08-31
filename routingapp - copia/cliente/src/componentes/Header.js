import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div className="App">
                <Link to={'/'}>
                <img src="/img/img/logo.png"/>
                </Link>
            </div>
        );
    }
}

export default Header;