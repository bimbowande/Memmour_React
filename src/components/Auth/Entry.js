
import React, { Component } from 'react';

import Brandname from '../BrandProps/Brandname.js';
import Loginform  from './Logincomponents/Loginform.js';
import Signform  from './Logincomponents/Signform.js';

import '../../styles/login.scss';


export default class Entry extends Component {
    componentWillMount(){
        let i = 0
        setInterval(()=>{
            i++;
            this.setState({value:this.state.value+1})
        },4000);
    }
    constructor(props){
        super(props);
        this.state = {
            value :0,
            data:false
        }
       
    }
    render(){
        let dt = document.querySelector('.tagline-text');
        const taglineText = ['Memories are worth sharing ',
        'Every Moment Shared is Remarkable','With memories you can live each moment',
        'Listen to the beating of your heart'];
        let addClass = this.state.data ? '':'fadeIn';
        if(this.state.value >=taglineText.length){
            this.state.value = 0;
        }
        let text = taglineText[this.state.value] + '.';
    
        /*const changeText = this._randomText();*/
        return(
            <div className="login-container" style={styles.login_container}>
                <div className="login-content" style={styles.login_content}>
                    <div className="input-section-container" style={styles.input_section_container}> 
                        <div className="input-container">
                            <div className="brand-section">
                                <div className="brand-name">
                                    <h2><a>Memmour</a></h2>  
                                </div>
                            </div>
                                <Signform/>
                            <div className="to-signup">
                                <div className="text-content">
                                    <p>Dont have an account?  <a href="">Sign up</a></p>
                                </div>
                            </div>
                            <footer className="login-footer">
                                <h4>&copy; Memmour</h4>
                            </footer>
                        </div>
                    </div>
                    <div className="image-section" style={styles.imageSection}>
                        <div className="circle" style={styles.circle}>
                            <p className={'tagline-text ' + addClass}>{text}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}
}

const styles = {
    input_section_container:{
        width:'35%',
        zIndex:4567876543,
    },
    input_container:{
        backgroundColor:'red',
    },
    circle:{
        width:'100%',
        height:'100%',
        borderRadius:'100%',
        border:'none',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        zIndex:4567654345
    },
    login_container:{
        width:'100%',
        height:'100%',
    },
    login_content:{
        marginLeft:40,
        marginRight:40
    },
    imageSection:{
        backgroundSize:'cover',
        position:'relative',
        width:'75%'
    },
    mini_circle:{
        height:100,
        width:100,
        backgroundColor:'white',
        position:'relative',
    }
}