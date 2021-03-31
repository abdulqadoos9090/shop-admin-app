import React from 'react';

export default function FormInput({id, label, type, index, defaultValue, handleChange}) {
    return (
        type === 'textarea' ? (
            <div className="form-floating my-3">
                <textarea className="form-control mb-3" placeholder={label} id={id} index={index}
                          onChange={handleChange} defaultValue={defaultValue}
                          style={{"height": "100px"}}/>
                <label htmlFor={id}>{label}</label>
            </div>
        ) : (
            <div className="form-floating my-3">
                <input type={type} className="form-control" id={id} onChange={handleChange} index={index} defaultValue={defaultValue}
                       placeholder={label}/>
                <label htmlFor={id}>{label}</label>
            </div>
        )
    )
}
