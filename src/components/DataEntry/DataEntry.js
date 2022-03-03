import React, { Component } from "react";
import '../DataEntry/DataEntry.css';

class DataEntry extends Component {

    // AUDRY - this is an archaic way of form
    // there is a way to ditch the unseccary = (evt) =

    state = {
        animal: '',
        color: ''
    }

    handleInputChange = ( event, propertyName ) => {
        this.setState({
            [propertyName]: event.target.value
        })
    }

    printFavoriteThings = ( event ) => {
        console.log( `Your favorite thing is a ${ this.state.color } ${ this.state.animal }` );
    }

    render() {
        return (
            <div className="dataEntry">
                <div>Enter your favorite:</div>

                <label>Animal</label>
                <input type='text' onChange={ (event) => this.handleInputChange( event, 'animal' )} />
                
                <label className='inputColor'>Color</label>                
                <input type='text' onChange={ (event) => this.handleInputChange( event, 'color') } />

                <button onClick={ this.printFavoriteThings }>Save</button>
            </div>
        )
    }
}

export default DataEntry;