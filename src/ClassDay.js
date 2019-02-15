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

  render() {
    return (
        <div className="grid-item" onClick={this.toggle}>
            <span className="assignment">Project</span>
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
