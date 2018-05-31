import React from 'react';
import InputElem from './InputElem.js';

const Signform = () =>{
    return(
        <div className="input-form">
            <form className="login-form" action="" method="post">
                <InputElem labelName="Username" divClass="form-group" type="text" name="username" placeholder ="Bimbo Wande" className="input-data" labelClass="label-form"/>
                <InputElem labelName="Email" divClass="form-group" type="text" name="email" placeholder="bimbowande@gmail.com" className="input-data" labelClass="label-form"/>
                <InputElem labelName="Password" divClass="form-group" type="password" name="password" placeholder ="**********" className="input-data" labelClass="label-form"/>
               <div className="form-group">
                    <button className='login-btn'>Sign Up</button>
                </div>                           
            </form>
        </div>
    )
}
export default Signform;