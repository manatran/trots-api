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

    this.callApi('http://localhost:5000/api/v3/projects')
      .then(res => this.setState({ projects: res }))
      .catch(err => console.log(err));

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
		let projectItems = 'No projects present';
    if (this.state.projects != null) {
      projectItems = this.state.projects.map((project, index) => {
        return (
          <List.Item key={index}>
            <Image avatar src="http://www.flyermakerpro.com/_mobile/images/placeholder_logo.jpg" />
            <List.Content>
              <List.Header>{ project.title }</List.Header>
              <List.Description>{ project.description }</List.Description>
							<p>{project.course.lecturers[0].first_name} {project.course.lecturers[0].name} { project.course.lecturers[1].first_name} {project.course.lecturers[1].name}</p>
            </List.Content>
          </List.Item>);
      });
    }

    let studentItems = 'No students present';
    if (this.state.students != null) {
      studentItems = this.state.students.map((student, index) => {
        return (
          <List.Item key={index}>
            <Image avatar src="https://scontent-bru2-1.xx.fbcdn.net/v/t1.0-9/26993207_545922642432110_3955760701895572132_n.jpg?oh=6f107d66fa2450e85f20ee404aacf743&oe=5B1A93D1" />
            <List.Content>
              <List.Header>{ student.first_name } { student.name } - <span class="hometown">{student.hometown.name}</span></List.Header>
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

				<h3>Projects</h3>
				<List>{ projectItems }</List>
      </div>
    );
  }
}

export default App;
