import React from 'react'
import './App.css'
import { connect } from 'react-redux';
import ColoredGridItem from "./ColoredGridItem"
import AddClass from './components/AddClass'
import AddAssignment from './components/AddAssignment'
import ClassRow from './ClassRow'

class Calendar extends React.Component {
    renderRows() {
        let rows = []
        for(var i = 0; i < this.props.classes.length; i++) {
            rows.push(<ClassRow key={this.props.classes[i].id} classId={this.props.classes[i].id} name={this.props.classes[i].name}></ClassRow>)
        }
        return rows;
    }

    render(){
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

                {this.renderRows()}

                <div className="row" id="bottom-row">
                    <div className="col">
                        <div className="button-container">
                            <AddClass/>
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
                            <AddAssignment />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state, ownProps) => {
  return {
      classes: state.classes || []
  }
}

export default connect(mapStateToProps)(Calendar);
