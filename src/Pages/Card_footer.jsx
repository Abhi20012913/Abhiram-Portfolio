import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faPinterest,  faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Pages/Home/Home.css';


const Footer = () => {
const [emailID , setEmailID] = useState("");
const [ name , setName] = useState("");
const [ Subject , setSubject] = useState("");
const [ Message , setMessage] = useState("");

function onchangeName(e) {
    let val = e.target.value;
    setName(val);
}

function onchangeEmail(e) {
    let val = e.target.value;
    setEmailID(val);
}

function onchangeSubject(e) {
    let val = e.target.value;
    setSubject(val);
}

function onchangeMessage(e) {
    let val = e.target.value;
    setMessage(val);
    
}

function onChangeSend(e) {
    let result = {
      "Name" : name ,
      "Email ID": emailID,
      "Subject": Subject,
      "Message": Message
    }
    console.log(result);
  }


    return (
        <div className='Home_start'>
            <div className='Home_about_me'>
                <div className='Home_marg'>
                    <div className='Home_do_row'>
                        <div className='Home_want_to'>
                            <p>Do you want to know more about me?</p>
                        </div>
                        <div className='Home_download'>
                            <p style={{ 'margin': '0px', 'padding': '10px' }}>Download CV</p>
                        </div>
                    </div>
                    <div className='Home_con'>
                        <p className='Home_Contact'>Contact Me</p>
                    </div>
                    <div className='Home_Input'>
                        <input className='input' type="text" placeholder="Your Name" onChange={onchangeName}  value={name}/>
                        <input className='input' type="text" placeholder="Email" onChange={onchangeEmail} value={emailID}/>
                        <input className='input' type="text" placeholder="Subject" onChange={onchangeSubject} value={Subject}/>
                    </div>
                    <div className='Home_text'>
                        <textarea className="input1" placeholder="Message" rows={5} onChange={onchangeMessage} value={Message}></textarea>
                    </div>
                    <div className='Home_Send'>
                        <p onClick={onChangeSend} >Send Message</p>
                    </div>
                    <div className='Home_icons'>
                        <div className='icons1'>
                            <div className='icons'>
                            <FontAwesomeIcon icon={faTwitter} />
                            </div>
                            <div  className='icons'>
                            <FontAwesomeIcon icon={faFacebookF} />
                            </div>
                            <div  className='icons'>
                            <FontAwesomeIcon icon={faPinterest} />
                            </div>
                            <div  className='icons'>
                            <FontAwesomeIcon icon={faInstagram} />
                            </div>
                        </div>
                        <div>
                            <p className='Home_copyright'>
                              copyright @2024 All rights reserved   
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
