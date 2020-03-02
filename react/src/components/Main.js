import React, { Component } from 'react';
import '../Styles/App.css';
import { getMentors, addMentor } from "../actions/api";
import { connect } from "react-redux";

class Main extends Component {

  state = {
    mentorData: [],
    mentorName: ""
  };

  componentDidMount() {
    this.props.getMentors()
      .then(() => {
        let response = this.props.mentor_data;
        this.setState({
          mentorData: response
        });
      })
      .catch((err) => {
        console.log(err)
      });
  }

  renderMentorsTasks = (tasks) => {
    return tasks.map((task, index) => {
      return (
        <div>{index + 1}. {task}</div>
      )
    })
  }

  addMentorTask = () => {
    console.log('INSIDE');
  }

  showMentorData = ()=> {
    return this.state.mentorData.map((data) => {
      return (
        <div>
          <div><b>Mentor Name:</b> {data.name}</div>
          <div><b>Tasks:</b><span><button onClick={this.addMentorTask}>Add Task</button></span><br/> {this.renderMentorsTasks(data.tasks)}</div>
        </div>
      )
    })
  }

  addMentor = () => {
    console.log('Mentorname - ', this.state.mentorName);
    this.props.addMentor({ name: this.state.mentorName })
      .then(() => {
        let response = this.props.add_mentor_data;
        console.log("Main -> addMentor -> response", response)
        this.setState({
          mentorName: ""
        });
      })
      .catch((error) => {

      });
  }

  renderAddMentor = () => {
    return (
      <div>
        <input value={this.state.mentorName} onChange={(e) => { this.setState({ mentorName: e.target.value})}} type="text"/>
        <button onClick={this.addMentor}>Add Mentor</button>
      </div>
    )
  }

  render = () => {
    return (
      <div>
        <div className="row mx-0">
          <div className="col-12 px-0">
            <div className="App"> 
              { this.renderAddMentor() }
              { this.showMentorData() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mentor_data: state.data.mentor_data,
    add_mentor_data: state.data.add_mentor_data
  };
}
export default connect(mapStateToProps, { getMentors, addMentor })(Main);
