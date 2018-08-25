import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './input';
import './form.css';

class Form extends Component {
    state = {
        inputs: []
    }

    componentDidMount(){
        this.addEmailInput();
    }

    addInput(name, label){
        const { inputs } = this.state;
        const newInput = <Field key={name} name={name} label={label} component={Input}/>

        this.setState({
            inputs: [...inputs, newInput]
        });

        console.log('PROPS:', this.props);

        this.props.initialize();
    }

    addEmailInput = () => {
        const { length } = this.state.inputs;
        const nextId = length + 1;

        this.addInput(`email-${nextId}`, `Email ${nextId}`);
    }

    submitForm = values => {
        console.log('Submit validate:', this.props.validate(values);

        console.log('Form Values:', values);
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <form className="col s12 m6 offset-m3" onSubmit={handleSubmit(this.submitForm)}>
                {this.state.inputs}
                <div className="row">
                    <div className="col s12 right-align">
                        <button onClick={this.addEmailInput} type="button" className="btn blue-grey lighten-4">Add Recipient</button>
                    </div>
                    <div className="col s12 center">
                        <button className="btn blue-grey lighten-2">Send</button>
                    </div>
                </div>
            </form>
        );
    }
}

function validate(values, props){
    console.log('Validate:', props);

    return { error: true };
}

export default reduxForm({
    form: 'dynamic-example',
    validate
})(Form);
