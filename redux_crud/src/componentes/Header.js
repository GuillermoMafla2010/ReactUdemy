import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <div className="">
                <nav className="navbar navbar-light bg-success text-white">
                   <Link to="/productos"> <a className="navbar-brand text-white" href="#">CRUD AXIOS REDUX</a> </Link>
                    <Link to="/nuevo"><button className="btn btn-warning btn-sm text-left text-uppercase">Crear Registo</button></Link>
                </nav>
            </div>
        );
    }
}

export default Header;