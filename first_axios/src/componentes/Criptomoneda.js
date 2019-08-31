import React, { Component } from 'react';

class Criptomoneda extends Component {
   
      
    render() {
        //console.log(this.props.criptomoneda.CoinInfo.Name + this.props.criptomoneda.CoinInfo.FullName)

        return (
        
                <option value={this.props.criptomoneda.CoinInfo.Name}>{this.props.criptomoneda.CoinInfo.FullName} </option>
            
        );
    }
}

export default Criptomoneda;