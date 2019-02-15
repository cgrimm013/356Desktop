import React from 'react';
import './App.css';
import ColoredGridItem from './ColoredGridItem'
import ClassDay from './ClassDay'

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
                    <ColoredGridItem class="grid-item head class" text={this.props.name}></ColoredGridItem>
                </div>
                {this.renderDays()}
            </div>
        );
    }
}

export default ClassRow;
