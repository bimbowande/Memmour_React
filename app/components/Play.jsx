import React,{Component} from 'react';
import ReactDOM from 'react-dom';


export default class Play extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={styles} className='playbtn'>
               <span className="ion ion-play"></span>
            </div>
        )
    }
}