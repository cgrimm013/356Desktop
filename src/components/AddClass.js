import React from 'react';
import { connect } from 'react-redux';
import { createClass } from '../actions';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      className: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onSubmit() {
    if(this.state.className) {
      this.props.createClass(this.state.className)
    } else {
      alert("You must provide a name before adding a class!")
      return;
    }
    this.toggle()
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} className="add-class">Add Class</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a New Class</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="className">Class Name</Label>
              <Input type="text" name="class" id="className" placeholder="Ex. CS 356"
                onChange={(element) => this.setState({ className: element.target.value})}/>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary" onClick={this.onSubmit}>Add Class</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createClass: (name) => {
      dispatch(createClass(name))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddClass);
