//components
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() { 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
    }

    //EmailJS service ID, template ID, and Public key
    const serviceId = 'service_bo8q5wm';
    const templateId = 'template_lk8wb59';
    const publicKey = 'oceq10uvBu_Fmcvxu';

    //Dynamic template params New Object
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Ogou',
      message: message,
    }

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log('Error sending email:', error);
      });

    return (
      <>
        <h1>Contact Me</h1>        
        <p>Phone: +1 407 - 451 - 4024</p> 
        <p>Email: livenghtston.cius@gmail.com</p>        
        <p>Local Address: Altamonte Springs, Fl 32714</p>        
      </>
    );
  }