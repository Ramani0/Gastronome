import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

const Emailfm = () => {

    const [name, setName ] = useState('');
    const [Items, setItems ] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_npogoj2';
        const templateId = 'template_vw6jrfe';
        const publicKey = 'zRFWk96yJ5OUQttZV';
   

    const templateParams ={
        from_name: name,
        from_email: email,
        to_name: 'Web Wizard',
        message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
        console.log('Email sent successfuly', response);
        setName('');
        setItems('');
        setEmail('');
        setMessage('');
    })
    .catch((error) => {
        console.log('Error sending email:', error);
    });
}

  return (
    
<>
<form onSubmit={handleSubmit} style={{display:'flex',justifyContent:'center',alignItems:'center',}}  className='emailform'>
    <div id='div' >
   
    <input type='text' placeholder='Your Name' style={{width:'100%',}} value={name} onChange={(e) => setName(e.target.value)} /><br></br>
    
    <input type='email' placeholder='Your Email'  style={{width:'100%',}} value={email} onChange={(e) => setEmail(e.target.value)} /><br></br><br></br>

    <input type='text' placeholder='Items' style={{width:'100%',}} value={Items} onChange={(e) => setItems(e.target.value)} /><br></br><br></br>
    <textarea placeholder='Address' cols="65" rows="6" style={{backgroundColor:'#c9daf3'}} value={message} onChange={(e) => setMessage(e.target.value)}></textarea><br></br>
    <button type='submit' style={{backgroundColor:'#55cfee',padding:'10px 30px',marginLeft:'500px'}}>Send</button>
    </div>
</form>
</>
  )
}

export default Emailfm