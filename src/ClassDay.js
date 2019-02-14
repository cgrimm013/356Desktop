import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDaysAssignments } from './reducers';
import './App.css';

class ClassDay extends Component {
  render() {
    return (
        <div className="grid-item">
            <span className="assignment">Project</span>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    assignments: getDaysAssignments(state, ownProps.day, ownProps.className)
  }
}

export default connect(mapStateToProps)(ClassDay);
