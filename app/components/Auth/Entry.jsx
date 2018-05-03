
import React, { Component } from 'react';

import Brandname from '../BrandProps/Brandname.jsx';
import Loginform  from './Logincomponents/Loginform.jsx';
import Signform  from './Logincomponents/Signform.jsx';


export default class Entry extends Component {
    constructor(props){
        super(props);
        this.state = {
            value :1
        }
        this._randomText = this._randomText.bind(this);
    }
    _randomText(){
        const taglineText = ['Memories are worth sharing ',
        'Every Moment Shared is Remarkable','With memories you can live each moment',
        'Listen to the beating of your heart'];
        let taglinearr = 0;
        let text ='';
        let value = this.state.quotes;
         setInterval(()=>{
            taglinearr++;
            let _doc = document.querySelector('.tagline-text');

            if(taglinearr>2){
                taglinearr = 0;
            }
            let text = taglineText[taglinearr] + '.';
            _doc.classList.add('fadeIn')
            _doc.innerHTML = text;
        },5000)
    }

    render(){
        let classname = 'tagline-text '
        const changeText = this._randomText();
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
                                    <p>Don't have an account?  <a href="">Sign up</a></p>
                                </div>
                            </div>
                            <footer className="login-footer">
                                <h4>&copy; Memmour</h4>
                            </footer>
                        </div>
                    </div>
                    <div className="image-section" style={styles.imageSection}>
                        <div className="circle" style={styles.circle}>
                            <p className={classname}> {changeText} </p>
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