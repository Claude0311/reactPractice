import React from 'react';
import logo from './logo.svg';
import './App.css';
import Row from './Row';
import './styles.css';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



class ScoreCard extends React.Component{
  render(){
    // let tdNode = this.props.scoreCard.records.map(arr=>{
    //   return (<tr>
    //       <td>{arr[0]}</td>
    //       <td>{arr[1]}</td>
    //   </tr>)
    // })
    return (
      <table id="table">
        <caption>
         {this.props.scoreCard.name}'s Score
        </caption>
        <thead>
            <tr>
                <th>Subject</th>
                <th>Score</th>
            </tr>
        </thead>
        <tbody>
            {
              this.props.scoreCard.records.map(arr=>{
                return <Row record={arr}/>
              })
            }
        </tbody>
      </table>
    );
  }
}

export default ScoreCard;
