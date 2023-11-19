import React from "react"
import { Form, Input, TextArea, Button } from "semantic-ui-react"
import emailjs from "emailjs-com"
import Swal from "sweetalert2"

import "./contact.css"


const SERVICE_ID = "service_hyq02jj";
const TEMPLATE_ID = "template_xvg4p8q";
const USER_ID = "gWAe17xHL-18lN8l9";

export const Contact = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: "success",
              title: "Message Sent Successfully"
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "Ooops, something went wrong",
              text: error.text,
            })
          });
        e.target.reset()
      };

  return (
    <div className="Contact">
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
          type="email"
        />
        <Form.Field className="Form"
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
    </div>
  );
}
