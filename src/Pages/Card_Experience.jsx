import React from 'react';
import '../Pages/Card_Experience.css';
import { FaExternalLinkAlt } from "react-icons/fa";
const Experience = (props) => {

    return (
        <div className='Card_Main_Experience'>
            <div className='Card_start_Experience'>
                <div className='Card_experience'>
                    <p style={{ 'margin': '0px', 'paddingBottom': '5%' }}>{props.title}</p>
                </div>
                <div className='Card_Design'>
                    <div className='Card_Design_experience'>
                        <div className='Card_Design_web_Experience'>
                            <p style={{ 'margin': '0px'  }} >{props.description}</p>
                        </div>
                        <div className='Card_Design_date'>
                            <p>{props.date}</p>
                        </div>
                    </div>
                    <div className='Card_Extrnal'>
                        <p><FaExternalLinkAlt /></p>
                    </div>
                </div>
              
                <div className='Card_Design'>
                    <div className='Card_Design_experience'>
                        <div className='Card_Design_web_Experience'>
                            <p style={{ 'margin': '0px' , 'paddingTop':'10%'}} >{props.description1}</p>
                        </div>
                        <div className='Card_Design_date'>
                            <p>{props.date1}</p>
                        </div>
                    </div>
                    <div className='Card_Extrnal'>
                        <p><FaExternalLinkAlt /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;

