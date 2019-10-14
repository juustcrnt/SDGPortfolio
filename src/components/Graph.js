import React from 'react'
import { Polar } from 'react-chartjs-2';

class Graph extends React.Component {

  constructor (props){
    super(props)
  }

  render() {

    return (
      <Polar
        data={this.props.data}
        options={{
          legend: {
              display: true,
              position: 'right'
            },
            elements: {
              arc: {
                angle: this.props.angle
              }
            }
          }}
      />
    )
  }

}

export default Graph
