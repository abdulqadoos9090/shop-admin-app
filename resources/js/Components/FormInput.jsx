import React from 'react';

export default function FormInput({id, name, label, type, index, defaultValue, handleChange, onBlur,style}) {
    return (
        type === 'textarea' ? (
            <div className="form-floating my-3">
                <textarea className="form-control mb-3" placeholder={label} id={id} name={name} index={index}
                          onChange={handleChange} defaultValue={defaultValue}
                          style={{"height": "100px"}}/>
                <label htmlFor={id}>{label}</label>
            </div>
        ) : (
            <div className="form-floating my-3">
                <input type={type} className={`form-control ${style}`} id={id} name={name} onChange={handleChange} index={index}
                       defaultValue={defaultValue}
                       onBlur={onBlur}
                       placeholder={label}/>
                <label htmlFor={id}>{label}</label>
            </div>
        )
    )
}
