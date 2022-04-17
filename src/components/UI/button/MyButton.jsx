import React from 'react';
import './MyButton.css';

const MyButton = ({children, styleBtn, ...props}) => {
    return (
        <button {...props} className={styleBtn}>
            {children}
        </button>
    );
};

export default MyButton;