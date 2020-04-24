import React from 'react';
import spinner from '../../assets/img/spinner.gif';

function Spinner() {
    return (
        <div>
            <img src={spinner}
                style={{ width: '200px', margin: 'auto', display: 'block' }} alt='loading' />
        </div>
    )
}

export default Spinner;