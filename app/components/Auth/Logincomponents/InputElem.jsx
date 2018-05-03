import React,{Component} from 'react';

const InputElem = ({labelName,divClass,type,name, placeholder,className,labelClass}) =>{
    return(
        <div className={divClass}>
            <label htmlFor= {name} className={labelClass}>{labelName}</label>
            <br/>
            <input type = {type} className={className}  name={name} placeholder={placeholder}/>
        </div>
    )
}
export default InputElem;