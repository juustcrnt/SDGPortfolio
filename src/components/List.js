import React from 'react'

import './../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';


class List extends React.Component {

  constructor (props){
    super(props)
  }


  render() {

    const nameItems = this.props.items.map((item) =>
        <tr>
          <td>{item.name}</td>
          <td>{item.currency}</td>
          <td>{item.amount}</td>
          <td>{item.portfolio}</td>
          <td>{item.sdgGlobal}</td>
          <td>{item.sdgGlobalSector}</td>
        </tr>
    );


    const listItems = this.props.numbers.map((number, i) =>
          // Correct! Key should be specified inside the array.

        <div className="card">
          <div className="card-header">
            <a className="card-link" data-toggle="collapse" data-parent="#card-530014" href={"#card-element-" + i}>{number}</a>
            </div>
            <div id={"card-element-" + i} className="collapse">
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Currency</th>
                      <th scope="col">Amount</th>
                      <th scope="col">% Portfolio</th>
                      <th scope="col">SDG Global</th>
                      <th scope="col">SDG Global Sector</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.items.map(function(item) {
                        console.log(number)
                        if(item.sector === number) {
                          return (
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.currency}</td>
                            <td>{item.amount}</td>
                            <td>{item.portfolio}</td>
                            <td style={item.sdgGlobal > item.sdgGlobalSector ? {backgroundColor : "green"} : {backgroundColor : "red"}}>{item.sdgGlobal}</td>
                            <td>{item.sdgGlobalSector}</td>
                          </tr>
                        );
                        }

                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );

    return (
      <div id="card-530014">
        {listItems}
      </div>
    )
  }

}

export default List
