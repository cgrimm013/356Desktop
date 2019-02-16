import React from 'react';
import '../App.css';
import DeleteClass from './DeleteClass';

class ClassNameDisplay extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          isHovered: false
        };
    
        // this.toggle = this.toggle.bind(this);
        // this.numberFromDay = this.numberFromDay.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }
  
    onMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    onMouseLeave = () => {
        this.setState({ isHovered: false });
    }

    render() {
        return (
            <div className="grid-item head class" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                {this.props.text}
                <DeleteClass display={this.state.isHovered} classId={this.props.classId}></DeleteClass>
            </div>
        );
    }
    
}

export default ClassNameDisplay;