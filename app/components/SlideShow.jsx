import React , {Component} from 'react';
import ReactDOM from 'react-dom';


const styles = {
    backgroundColor:'rgba(34,14,200,.1)'
}
export default class slideshow extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={styles} className="slideshow-section section">
                slide-show
            </div>
        )
    }
}