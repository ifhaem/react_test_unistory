import React from 'react';
import './MyTextarea.css'

const MyTextarea = ({children, styleTxta, ...props}) => {
    return (
        <textarea {...props} className={styleTxta}>
            {children}
        </textarea>
    );
};

export default MyTextarea;