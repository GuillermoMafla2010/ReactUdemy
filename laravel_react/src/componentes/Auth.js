
import React, { Component } from 'react';

class Auth extends Component {
    
    
    
    
    componentWillMount(){
        
    }

    cerrarSesion=()=>{
        localStorage.clear();
        this.props.history.replace("/login");
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Auth;