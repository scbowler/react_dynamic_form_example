import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';
import Input from './input';
import './form.css';

class Form extends Component {
    submitForm = values => {

        console.log('Form Submit Values:', values);
    }

    renderEmails({fields, meta: {touched, error}}){
        // If no fields create first field
        // if(!fields.length){
        //     fields.push();
        //     return null;
        // }

        const emails = fields.map((id, index) => (
            <div key={id} className="field-container">
                {
                    index 
                        ? <div onClick={() => fields.remove(index)} className="remove">
                            <i className="material-icons">delete_forever</i>
                        </div>
                        : null // No remove button on first input
                }
                <Field name={id} label={`Email ${index + 1}`} component={Input} />
            </div>
        ));

        return (
            <div>
                {emails}
                <div className="row">
                    <div className="col s12 center">
                        <div type="button" className="add-email" title="Add Recipient" onClick={() => fields.push()}>
                            <i className="material-icons">group_add</i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render(){
        const { handleSubmit, reset } = this.props;

        return (
            <form className="col s12 m6 offset-m3" onSubmit={handleSubmit(this.submitForm)}>
                <h5 className="center grey-text">Refer Friends</h5>
                <FieldArray name="emails" component={this.renderEmails}/>
                <div className="row">
                    <div className="col s6 center">
                        <button type="button" className="btn red lighten-3" onClick={() => reset()}>Reset</button>
                    </div>
                    <div className="col s6 center">
                        <button className="btn blue-grey lighten-1">Send</button>
                    </div>
                </div>
            </form>
        );
    }
}

function validate({emails}){
    const errors = {};
    const emailErrors = [];

    if(emails && !emails[0]){
        emailErrors.push('Please enter at least 1 email');
    }

    if(emailErrors.length){
        errors.emails = emailErrors;
    }

    return errors;
}

export default reduxForm({
    form: 'dynamic-example',
    validate,
    initialValues: {
        emails: ['']
    }
})(Form);
