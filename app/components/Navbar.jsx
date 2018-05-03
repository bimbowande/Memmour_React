import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
                <div className="navbar-section">
                    <div className="brand">
                        <h2 className="brand-name"><a href="#">Memmour</a></h2>
                    </div>

                    <div className="search">
                        <div className="search-section">
                            <span className="ion ion-search"></span>
                            <input type="text" className="search-input"/>
                        </div>
                    </div>

                    <div className="button-section">
                        <div className="btn">
                            <a href="#"><button className="btn-share">Share</button></a>
                            <a href="#"><button className="btn-explore">Explore</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}