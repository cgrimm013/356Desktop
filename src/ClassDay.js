import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDaysAssignments } from './reducers';
import ViewAssignments from './components/ViewAssignments';
import './App.css';

class ClassDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  renderAssignments() {
    let assignmentDisplays = [];
    this.props.assignments.forEach(assignment => {
      let style = this.getAssignmentClassName(assignment.type);
      assignmentDisplays.push(
        <div key={`${assignment.type}${assignment.description}${assignment.assignmentDay}`}>
          <span className={style}>{assignment.type}</span>
          <br/>
          <div className="assignment-space" />
        </div>
        )
    });

    return assignmentDisplays;
  }

  getAssignmentClassName(type) {
    switch (type) {
      case "Reading":
        return "assignment reading";
      case "Project":
        return "assignment project";
      case "Lab":
        return "assignment lab";
      case "Review":
        return "assignment review";
      default:
        return "assignment";
    }
  }

  render() {
    return (
        <div className="grid-item class-day" onClick={this.toggle}>
            {this.renderAssignments()}
            <ViewAssignments toggle={this.toggle} modal={this.state.modal} day={this.props.day} class={this.props.class}/>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    assignments: getDaysAssignments(state, ownProps.day, ownProps.class)
  }
}

export default connect(mapStateToProps)(ClassDay);
