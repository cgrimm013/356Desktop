import React from 'react';
import { connect } from 'react-redux';
import { deleteClass } from '../actions';
import "../App.css"

class DeleteClass extends React.Component {

    constructor(props) {
        super(props);
    
        this.deleteClass = this.deleteClass.bind(this);
    }

    getClassName() {
        if (this.props.display) {
            return "delete-class-visible";
        }
        return "delete-class-hidden";
    }

    deleteClass() {
        return () => {
            this.props.deleteClass(this.props.classId)
        }
    }

    render() {
        return (
            <div className={this.getClassName()} onClick={this.deleteClass()}>
                <i className="fas fa-trash-alt"></i>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteClass: (classId) => {
      dispatch(deleteClass(classId))
    }
  }
}

export default connect(null, mapDispatchToProps)(DeleteClass);