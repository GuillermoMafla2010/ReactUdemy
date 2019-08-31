import React, { Component } from 'react';

class Estudiante extends Component {
    render() {
        return (
            <div>
                <table className="uk-table uk-table-responsive uk-table-divider">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
        </tr>
        
    </tbody>
</table>
            </div>
        );
    }
}

export default Estudiante;