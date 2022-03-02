import React, { Component } from "react";
import '../DataEntry/DataEntry.css';

class DataEntry extends Component {

    render() {
        return (
            <>
                <div>Enter your favorite</div>
                <label>Animal</label>
                <input></input>
        
                <label>Color</label>
                <input></input>
        
                <button>Save</button>
            </>
        )
    }
}

export default DataEntry;