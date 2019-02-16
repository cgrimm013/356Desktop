import React from 'react';
import './App.css';
import ClassDay from './ClassDay'
import ClassNameDisplay from './components/ClassNameDisplay';

class ClassRow extends React.Component {

    renderDays() {
        let days = []
        for(var i = 0; i < 7; i++) {
            days.push(
                <div key={`${this.props.name}${i}${this.props.id}`} className="col">
                    <ClassDay day={i} class={this.props.name}></ClassDay>
                </div>
            )
        }
        return days;
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <ClassNameDisplay classId={this.props.classId} text={this.props.name}></ClassNameDisplay>
                </div>
                {this.renderDays()}
            </div>
        );
    }
}

export default ClassRow;
