import React from 'react';
import { connect } from 'react-redux';
import { createClass } from '../actions';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ViewAssignments extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>Assignments for {this.props.day}</ModalHeader>
        <ModalBody>

        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(ViewAssignments);
