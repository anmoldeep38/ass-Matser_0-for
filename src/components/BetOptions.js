import React, { useState } from 'react';

const BetOptions = ({ onBet }) => {
    const [betAmount, setBetAmount] = useState(100);
    const [betOption, setBetOption] = useState('7 up');

    const handleSubmit = (e) => {
        e.preventDefault();
        onBet({ betAmount, betOption });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Bet Amount:</label>
                <select value={betAmount} onChange={(e) => setBetAmount(parseInt(e.target.value))}>
                    <option value={100}>100</option>
                    <option value={200}>200</option>
                    <option value={500}>500</option>
                </select>
            </div>
            <div>
                <label>Bet Option:</label>
                <select value={betOption} onChange={(e) => setBetOption(e.target.value)}>
                    <option value="7 up">7 up</option>
                    <option value="7">Lucky 7</option>
                    <option value="7 down">7 down</option>
                </select>
            </div>
            <button type="submit">Roll Dice</button>
        </form>
    );
};

export default BetOptions;
