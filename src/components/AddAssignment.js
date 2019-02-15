import React from 'react';
import { connect } from 'react-redux';
import { createAssignment } from '../actions';
import { Button, Form, Row, FormGroup, Col, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddAssignment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      day: 0,
      class: "",
      type: "Reading",
      descr: ""
    };

    this.toggle = this.toggle.bind(this);
    this.numberFromDay = this.numberFromDay.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  displayClassOptions() {
    let options = []
    for(var i = 0; i < this.props.classes.length; i++) {
      options.push(
        <option key={`option${i}`}>{this.props.classes[i].name}</option>
      )
    }
    return options;
  }

  numberFromDay(day) {
    if(day === "Monday") {
      return 0;
    }else if(day ==="Tuesday") {
      return 1;
    }else if(day ==="Wednesday") {
      return 2;
    }else if(day ==="Thursday") {
      return 3;
    }else if(day ==="Friday") {
      return 4;
    }else if(day ==="Saturday") {
      return 5;
    }else if(day ==="Sunday") {
      return 6;
    }else {
      return -1;
    }
  }

  onSubmit() {
    let klass = this.state.class
    if(!this.props.classes) {
      alert("There are no existing classes! Please create some before trying to add an assignment..");
      return;
    }

    if(!klass) { //in the case where they haven't selected a parameter yet, then default it
      klass = this.props.classes[0].name
    }

    if(this.state.descr) {
      this.props.createAssignment(this.state.day, klass, this.state.type, this.state.descr)
    } else {
      alert("Please provide a description.")
      return;
    }

    //clear the data
    this.setState({
      day: 0,
      class: "",
      type: "Reading",
      descr: ""
    })
    this.toggle()
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} className="add-assignment">Add Assignment</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a New Assignment</ModalHeader>
          <ModalBody>
            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="typeSelect">Assignment Type</Label>
                    <Input type="select" name="type" id="typeSelect"
                      onChange={(element) => this.setState({ type: element.target.value})}>
                      <option>Reading</option>
                      <option>Project</option>
                      <option>Lab</option>
                      <option>Review</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="classSelect">Class</Label>
                    <Input type="select" name="class" id="classSelect"
                      onChange={(element) => this.setState({ class: element.target.value})}>
                      {this.displayClassOptions()}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="descr" id="description"
                      onChange={(element) => this.setState({ descr: element.target.value})}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="typeSelect">Assignment Day</Label>
                    <Input type="select" name="type" id="typeSelect"
                      onChange={(element) => this.setState({ day: this.numberFromDay(element.target.value)})}>
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                      <option>Sunday</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onSubmit}>Add Assignment</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    classes: state.classes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createAssignment: (day, klass, type, descr) => {
      dispatch(createAssignment(day, klass, type, descr))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAssignment);
