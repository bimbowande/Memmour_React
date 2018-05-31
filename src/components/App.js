import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Entry from './Auth/Entry.js';

class App extends Component{
    constructor(props){
        super(props);
        this.state  = {
            
        }
    }
    render(){
        return(
            <div>
                <Entry />
            </div>          
        )
    }
}
export default App;
