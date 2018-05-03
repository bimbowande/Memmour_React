import React from 'react';
import InputElem from './InputElem.jsx';

const Loginform = () => {
    return(
        <div className="input-form">
            <form className="login-form" action="" method="post">
                <InputElem labelName="Email" divClass="form-group" type="text" name="email" placeholder="bimbowande@gmail.com" className="input-data" labelClass="label-form"/>
                <InputElem labelName="Password" divClass="form-group" type="password" name="password" placeholder ="**********" className="input-data" labelClass="label-form"/>
                <div className="login-btn-container">
                    <button className='login-btn'>Login</button>
                </div>                           
            </form>
        </div>
        
    )
}
export default Loginform;