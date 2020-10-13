import React from 'react';

class Row extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.record[0]}</td>
                <td>{this.props.record[1]}</td>
            </tr>
        )
    }
}
export default Row;