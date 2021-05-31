import React from 'react';
import './Modal.css'

const Modal = ({ show, onClose, onOk, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="App-modal-bg">
            <div className="App-modal-modal">
                <span className="App-modal-close" onClick={e => { onClose(); }}>&times;</span>
                <div className="App-modal-content">{children}</div>
                <div>
                    <button className="btn App-modal-ok right" onClick={() => { onOk(); }}>OK</button>
                </div>
            </div>
        </div>
    );
};

/**
 * 
            <div>
                <button onClick={e => { onClose(); }}>Close</button>
            </div>
 */
export default Modal;