import React from 'react';
import { Button, Form, Row, FormGroup, Col, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddAssignment extends React.Component {
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
                    <Input type="select" name="type" id="typeSelect">
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
                    <Input type="select" name="class" id="classSelect">
                      <option>CS 356</option>
                      <option>CS 404</option>
                      <option>CS 428</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={12}>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea" name="descr" id="description" />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Add Assignment</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddAssignment;
