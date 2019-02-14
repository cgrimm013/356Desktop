import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchClasses, fetchAssignments } from './actions';
import './App.css';
import Calendar from './Calendar';

class App extends Component {
  componentDidMount() {
    this.props.fetchClasses()
    this.props.fetchAssignments()
  }

  render() {
    return (
      <div>
        <nav className="navbar fixed-top">
          <h1 id="logo">Simplify</h1>
        </nav>
        <div className="vertical-center">
          <Calendar></Calendar>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClasses: () => {
      dispatch(fetchClasses())
    },
    fetchAssignments: () => {
      dispatch(fetchAssignments())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
