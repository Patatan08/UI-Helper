import React from 'react';
import Data from './TestData/TestData.json';

const tablica = Object.entries(Data);
function Translator() {
    return (
        <div className="container mt-4">
            <ul className="list-group">
                {tablica.sort((a, b) => {
                    const keyA = a[0];
                    const keyB = b[0];
                    return keyA.localeCompare(keyB);
                }).map(([key, value]) => (
                    <li key={key} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>
                            {key}
                        </span>
                        <strong>
                            {value}
                        </strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Translator;