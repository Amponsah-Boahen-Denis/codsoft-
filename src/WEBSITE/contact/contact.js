import React from 'react'
import './contact.scss'
function Contact() {
 
  return(
      <div className='contact' id='contact'>
        <div classname='div'>
        <h3>CONTACT ME</h3>
          <div id='cont'>
          
          <form action='' >
      <label>Name:</label>
      <input type="text" name="name" required/>
      <label>Email:</label>
      <input type="email" name="email" required />
      <label>Message:</label>
      <textarea name="message" required />
      <input id='click' type="submit" value="Send"  required/>
      
     
    </form>
          </div>
        
        </div>
        

           <div classname='goup'>
             <a href="#home"><img src={require('./arrowup.png')} alt="" /></a>

             </div> 
        </div>
    )
}

export default Contact;
