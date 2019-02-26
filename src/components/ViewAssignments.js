import React from 'react';
import { connect } from 'react-redux';
import { deleteAssignment } from '../actions';
import { getDaysAssignments } from '../reducers';
import { Button, Modal, Row, Col, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AddAssignment from './AddAssignment';
import './ViewAssignments.css';

class ViewAssignments extends React.Component {
  constructor(props) {
    super(props);

    this.deleteAssignment = this.deleteAssignment.bind(this);
  }
  dayFromNumber(day) {
    if(day === 0) {
      return "Monday";
    }else if(day === 1) {
      return "Tuesday";
    }else if(day === 2) {
      return "Wednesday";
    }else if(day === 3) {
      return "Thursday";
    }else if(day === 4) {
      return "Friday";
    }else if(day === 5) {
      return "Saturday";
    }else if(day === 6) {
      return "Sunday";
    }else {
      return "Unknown Day... :(";
    }
  }

  deleteAssignment(id) {
    return () => {
      this.props.deleteAssignment(id)
    }
  }

  displayAssignments() {
    let display = [];
    for(var i = 0; i < this.props.assignments.length; i++) {
      let current = this.props.assignments[i];
      display.push(
        <Row key={`assignment${i}`}>
          <Col md={12} className="assignmentType">
            {current.type}
          </Col>
          <Col md={12}>
            {current.descr}
          </Col>
          <Col md={12}>
            <Button color="danger" size="sm" onClick={this.deleteAssignment(current.id)}>Delete</Button>
          </Col>
        </Row>
      )
    }
    return display;
  }

  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>{this.props.class} Assignments for {this.dayFromNumber(this.props.day)}</ModalHeader>
        <ModalBody>
          {this.props.assignments.length === 0 && <div>There are no assignments for today.</div>}
          {this.displayAssignments()}
        </ModalBody>
        <ModalFooter>
          <AddAssignment buttonType="btn btn-primary" text="Add" defaultDay={this.props.day} defaultClass={this.props.class}/>
          <Button color="secondary" onClick={this.props.toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    assignments: getDaysAssignments(state, ownProps.day, ownProps.class)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAssignment: (id) => {
      dispatch(deleteAssignment(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAssignments);
