import React from 'react';
import './MyModal.css';

const MyModal = ({children, visible, setVisible}) => {

    const modalStyles = ["passive"]

    if(visible) {
        modalStyles.push("active")
    }

    return (
        <div className={modalStyles.join(' ')} onClick={() => setVisible(false)}>
            <div className="content" onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;