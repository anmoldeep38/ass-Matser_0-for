import React from 'react';

const Result = ({ result }) => (
    <div>
        <h2>{result.result === 'win' ? 'You Win!' : 'You Lose!'}</h2>
        <p>Winnings: {result.winnings}</p>
    </div>
);

export default Result;
