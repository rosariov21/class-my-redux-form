import React from 'react';

import {Field, reduxForm} from 'redux-form'


let ContactForm = props =>{
    const{handleSubmit} = props;



    
    return <form onSubmit={handleSubmit}>
        <label> Name:

   <Field name="inputName" component="input" type="text"/>
   </label>

    <button  type='submit' >CLICK-HERE</button>

    


    </form>
}
ContactForm = reduxForm({
    form:'contact'

})(ContactForm)

export default ContactForm