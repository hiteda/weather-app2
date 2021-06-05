import React, { useState } from 'react';
import './AddCity.css';

const AddCity = ({ onOk }) => {
    const [val, setVal] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        onOk(val);
    };

    return (
        <div>
            <h5>Add a new city</h5>
            <span>Enter a city name in the format &lt;city, state/country&gt;</span>
            <form action="#" onSubmit={handleSubmit}>
                <input onChange={event => setVal(event.target.value)} />
                <button type="submit" className="btn App-addCity-ok right">OK</button>
            </form>
        </div>
    );
};

export default AddCity;