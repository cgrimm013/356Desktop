import React from 'react';
import './App.css';
import ColoredGridItem from './ColoredGridItem'
import ClassDay from './ClassDay'

const ClassRow = () => {
    return (
        <div className="row">
            <div className="col">
                <ColoredGridItem class="grid-item head class" text="CS 356"></ColoredGridItem>
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

export default ClassRow;