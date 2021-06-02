import React, { useState } from 'react';
import './AddCity.css';

const AddCity = ({ onOk }) => {
    const [val, setVal] = useState({});

    return (
        <div>
            <h5>Add a new city</h5>
            <span>Enter a US city in the format &lt;city, state&gt;</span>
            <input onChange={event => setVal(event.target.value)} />
            <div>
                <button className="btn App-addCity-ok right" onClick={() => { onOk(val); }}>OK</button>
            </div>
        </div>
    );
};

export default AddCity;