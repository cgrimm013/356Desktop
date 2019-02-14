import React from 'react';
import './App.css';
import ColoredGridItem from './ColoredGridItem'
import ClassDay from './ClassDay'

class ClassRow extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <ColoredGridItem class="grid-item head class" text={this.props.name}></ColoredGridItem>
                </div>
                <div className="col">
                    <ClassDay></ClassDay>
                </div>
                <div className="col">
                    <ClassDay></ClassDay>
                </div>
                <div className="col">
                    <ClassDay></ClassDay>
                </div>
                <div className="col">
                    <ClassDay></ClassDay>
                </div>
                <div className="col">
                    <ClassDay></ClassDay>
                </div>
                <div className="col">
                    <ClassDay></ClassDay>

                </div>
                <div className="col">
                    <ClassDay></ClassDay>
                </div>
            </div>
        );
    }
}

export default ClassRow;
