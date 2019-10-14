'use strict';
import React, { Component, View, Image }  from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';


import Graph from './components/Graph';
import List from './components/List';

import greta from './3.jpg'
import femen from './4.jpg'

const data = require('./data.json')
const stocks = require('./stocks.json')
const profiles = require('./profiles.json')


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      catVal: [''],
      allItems: [],
      angles: [],
      selectedCustomer : 0,
    };
}

componentDidMount() {
  let d = data[0]
  var allvalues = Object.values(d)
  var allkeys = Object.keys(d)
  var uniq = [ ...new Set(allvalues) ]
  this.setState({catVal: uniq})

  var allNames = Object.values(data[2])[0]

  let itemsArray = []

  for(var i=0; i < allvalues.length; i++) {

    let toBePushed = {
      name : Object.keys(data[0])[i],
      sector: Object.values(data[0])[i],
      currency: Object.values(data[2])[i],
      amount: Object.values(data[3])[i],
      portfolio: Object.values(data[4])[i],
      sdgGlobal: Object.values(data[5])[i],
      sdgGlobalSector: Object.values(data[6])[i]
    }

    itemsArray.push(toBePushed);

  }

  this.setState({allItems: itemsArray})
  {/*this.setState({angles: this.divvy(6.28318530718, 17, 0.02)})*/}
  this.divise(profiles[this.state.selectedCustomer])
}

divvy(number, parts, min) {

  var randombit = number - min * parts;
  var out = [];

  for (var i=0; i < parts; i++) {
    out.push(Math.random());
  }

  var mult = randombit / out.reduce(function (a,b) {return a+b;});

  return out.map(function (el) { return el * mult + min; });
}

divise(array) {
  let original = array.Stocks

  let newAngles = original.map(function(e) {
    if(e > 0 ){
      return (e/100)*6.28318530718
    } else {
      return 0.001
    }
  })
  console.log(newAngles)
  this.setState({angles: newAngles})
}

async changeCustomer (c) {
  await this.setState({selectedCustomer: c})
  await this.divise(profiles[this.state.selectedCustomer])
}

  render () {

  let i = 0

  const items = this.state.allItems;

  let datas = {
  datasets: [{
    data: [5, 53, 51 , 50, 43, 53, 49, 90, 50, 52, 50, 50, 90, 49, 5, 47, 51],
    position: 'right',
    backgroundColor: [
      '#e5243b',
      '#dda73a',
      '#4d9f38',
      '#c5192d',
      '#ff3b21',
      '#26bce2',
      '#fcc30b',
      '#a21942',
      '#fd6925',
      '#dd1367',
      '#fd9b24',
      '#bf8a2e',
      '#3f7e44',
      '#0a97d9',
      '#56c02b',
      '#00699d',
      '#19486a'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'No Poverty',
    'Zero Hunger',
    'Good Health and Well Being',
    'Quality Education',
    'Gender Equality',
    'Clean Water and Sanitation',
    'Affordable and Clean Energy',
    'Decent Work and Economic Growth',
    'Industry, Innovation and Infrastructure',
    'Reduced Inequalities',
    'Sustainable Cities and Communities',
    'Responsible Consuption and Production',
    'Climate Action',
    'Life Below Water',
    'Life On Land',
    'Peace, Justice and Strong Institutions',
    'Partnerships for the Goals'
  ]
};

  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="navbar-toggler-icon" />
              </button> <a className="navbar-brand" href="#">Portfolio Rating</a>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => {this.changeCustomer(0)}}>Greta Thunder</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => {this.changeCustomer(1)}}>Germaine de Beauvoir</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => {this.changeCustomer(2)}}>Charles Koch</a>
                  </li>
                </ul>
                <ul className="navbar-nav ml-md-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Contact <span className="sr-only">(current)</span></a>
                  </li>
                </ul>
              </div>
            </nav>

          <Graph data ={datas} angle= {this.state.angles}/>
          <List items={this.state.allItems} numbers={this.state.catVal}/>

          </div>
        </div>
      </div>
    )
  }
}


export default App
