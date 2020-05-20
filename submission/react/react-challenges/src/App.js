import React from 'react';
import './App.css';

export default class App extends React.Component {

constructor(props) {
  super(props)

this.state = {
  person: [
    {
      id:0,
      name:'Alejandro Escamilla',
      number: '704-ITS-MEEE',
      birth: '01/04/1999'
    },
    {
      id:1,
      name:'Gianluca Escamilla',
      number: '704-ITS-ADOG',
      birth: '06/04/2016'
    },
    {
      id:2,
      name:'Donna Escamilla',
      number: '704-ITS-ACAT',
      birth: '07/24/1999'
    }
  ]
}
};

  render() {
  return ( <div>
    <div className="App">

    <p className='object'>Hello! I am <span>{this.state.person[0].name}</span> you contact me at <span>{this.state.person[0].number}</span>, I was born on <span>{this.state.person[0].birth}</span>.</p>
    <p className='object'><span>{this.state.person[1].name}</span> is my son! His phone number is <span>{this.state.person[1].number}</span>, he was born on <span>{this.state.person[1].birth}</span>.</p>
    <p className='object'>I also have a daughter called <span>{this.state.person[2].name}</span> you contact her at <span>{this.state.person[2].number}</span>, she was born on <span>{this.state.person[2].birth}</span>.</p>
    <p className='object'>I love my cat and dog more than anything!</p>

    </div>
    </div>);
  }
}