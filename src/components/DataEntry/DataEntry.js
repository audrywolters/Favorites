import React, { Component } from "react";
import '../DataEntry/DataEntry.css';

class DataEntry extends Component {

    render() {
        return (
            <div className="dataEntry">
                <div>Enter your favorite:</div>
                <label>Animal</label>
                <div>
                    <input type='text' />
                </div>
                
        
                <label className="inputColor">Color</label>                
                <input type='text' />

        
                <button>Save</button>
            </div>
        )
    }
}

export default DataEntry;