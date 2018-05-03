import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BrandTag from './BrandTag.jsx';
import SlideShow from './Slideshow.jsx';
import Play from './Play.jsx';

const styles = {
    display:'flex'
}
export default class Container extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div  style ={styles}className="brand-container">
                <BrandTag/>
                <SlideShow />
            </div>
        )
    }
}