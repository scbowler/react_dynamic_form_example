import React from 'react';

export default ({label, input, meta: {error, touched}}) => (
    <div className="row">
        <div className="col s12">
            <label>{label}</label>
            <input {...input} type="text"/>
            <p className="red-text text-darken-2">{touched && error}</p>
        </div>
    </div>
);
