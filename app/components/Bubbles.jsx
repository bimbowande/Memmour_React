import React,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class Bubbles extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="particle-header">
                <div className="img-1"></div>
                <div className="img-2"></div>
                <div className="img-3"></div>
                <div className="img-4"></div>
                <div className="img-5"></div>
                <div className="img-6"></div>
                <div className="img-7"></div>
                <div className="img-8"></div>
                <div className="img-9"></div>
                <div className="img-10"></div>
                <div className="img-11"></div>
            </div>
        )
    }
}