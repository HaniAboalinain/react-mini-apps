import "bootstrap/dist/css/bootstrap-grid.css"
import React, { Component } from "react";
import Header from "./components/layout/Header";
import Aside from "./components/Aside";
import Details from "./components/Details";

export class App extends Component {
  state = {
    selectedItemId: 3,
    data: [
      {
        id: 1,
        name: 'Hani',
        email: 'Hani@gmail.com',
        phone: '07999999',
        city: 'amman',
        state: 'amman',
        country: 'jordan',
        orgainzation: 'Facebook',
        jobProfile: 'Software Developer',
        additionalInfo: 'Any things'
      },
      {
        id: 2,
        name: 'Mohammad',
        email: 'Mohammad@gmail.com',
        phone: '079888888',
        city: 'Istanbul',
        state: 'Istanbul',
        country: 'Turky',
        orgainzation: 'Google',
        jobProfile: 'Tester',
        additionalInfo: 'litle things'
      },
      {
        id: 3,
        name: 'Ahmad',
        email: 'Ahmad@gmail.com',
        phone: '0797777777',
        city: 'Mosco',
        state: 'amman',
        country: 'Russia',
        orgainzation: 'Amazon',
        jobProfile: 'UI Designer',
        additionalInfo: 'more things'
      },
    ]
  }

  handleClick = (id) => {
    this.setState({selectedItemId: id});
  }


  render() {
    return (
      <>
        <div className="container-fluid">
         
        </div>
      </>
    );
  }
}

export default App;
