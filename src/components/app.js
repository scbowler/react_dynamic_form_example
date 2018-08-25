import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import Form from './form';

const App = () => (
    <div className="container">
        <h1 className="center">Dynamic Form Example</h1>
        <div className="row">
            <Form />
        </div>
    </div>
);

export default App;
