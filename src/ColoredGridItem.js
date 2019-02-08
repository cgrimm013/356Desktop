import React from 'react';
import './App.css';

const ColoredGridItem = (props) => {
    return (
        <div className={props.class}>
            {props.text}
        </div>
    );
}

export default ColoredGridItem;