import React from 'react';
import '../Pages/Card_Expertise.css';

const Expertise = (props) => {

    return (
        <div className='Card_Main_Protfolio'>
            <div className='Card_Card_main'>
                <div className='Card_Expertise_title'>
                    <p>{props.title}</p>
                </div>
                <div className='Card_Expertise_sentence'>
                    <p>{props.sentence}</p>
                </div>
            </div>
        </div>
    );
};

export default Expertise;

