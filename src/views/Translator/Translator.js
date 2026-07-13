import React from 'react';
import Data from './TestData/TestData.json';

const tablica = Object.entries(Data);
function Translator() {
    return (
        <div className="container mt-4">
            <ul className="list-group">
                {tablica.sort(([keyA], [keyB]) => {
                    const ifBigA = keyA[0] === keyA[0].toUpperCase() && keyA[0] !== keyA[0].toLowerCase();
                    const ifBigB = keyB[0] === keyB[0].toUpperCase() && keyB[0] !== keyB[0].toLowerCase();
                    if (ifBigA && !ifBigB) return -1;
                    if (!ifBigA && ifBigB) return 1;
                    return keyA.localeCompare(keyB);
                }).map(([key, value]) => (
                    <li key={key} className="list-group-item d-flex justify-content-between align-items-center">
                        <p>
                            {key}
                        </p>
                        <p>
                            {value}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Translator;