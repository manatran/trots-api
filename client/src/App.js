import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
			students: null,
			projects: null
    }

    this.callApi('http://localhost:5000/api/v3/users/student')
      .then(res => this.setState({ students: res }))
      .catch(err => console.log(err));
  }

  callApi = async (endPoint) => {
    const response = await fetch(endPoint);
    const body = await response.json();

    if (response.status !== 200) throw Error(body);

    return body;
  }

  render() {

    let studentItems = 'No students present';
    if (this.state.students != null) {
      studentItems = this.state.students.map((student, index) => {
        return (
          <List.Item key={index}>
            <Image avatar src={student.picture} />
            <List.Content>
              <List.Header>{ student.first_name } { student.name }</List.Header>
              <List.Description>{ student.bio }</List.Description>
            </List.Content>
          </List.Item>);
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-intro">GDM.GENT</h2>
        </header>
				<h3>Students</h3>
        <List>{ studentItems }</List>
      </div>
    );
  }
}

export default App;
