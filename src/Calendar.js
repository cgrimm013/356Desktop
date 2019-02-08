import React from 'react';
import './App.css';
import ColoredGridItem from "./ColoredGridItem"
import ClassRow from './ClassRow';
import Button from './Button'

const Calendar = () => {
    return (
        <div className="container" id="calendar">
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <ColoredGridItem class="grid-item head weekday" text="Mon"></ColoredGridItem>
                </div>
                <div className="col">
                    <ColoredGridItem class="grid-item head weekday" text="Tues"></ColoredGridItem>
                </div>
                <div className="col">
                    <ColoredGridItem class="grid-item head weekday" text="Wed"></ColoredGridItem>
                </div>
                <div className="col">
                    <ColoredGridItem class="grid-item head weekday" text="Thurs"></ColoredGridItem>
                </div>
                <div className="col">
                    <ColoredGridItem class="grid-item head weekday" text="Fri"></ColoredGridItem>
                </div>
                <div className="col">
                    <ColoredGridItem class="grid-item head weekday" text="Sat"></ColoredGridItem>
                </div>
                <div className="col">
                    <ColoredGridItem class="grid-item head weekday" text="Sun"></ColoredGridItem>
                </div>
            </div>

            <ClassRow></ClassRow>
            <ClassRow></ClassRow>
            <ClassRow></ClassRow>
            <ClassRow></ClassRow>
            <ClassRow></ClassRow>

            <div className="row" id="bottom-row">
                <div className="col">
                    <div className="button-container">
                        <Button class="btn add-class" text="Add Class"></Button>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
                <div className="col">
                    <div className="button-container">
                        <Button class="btn add-assignment" text="Add Assignment"></Button>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Calendar;