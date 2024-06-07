import React, { useState } from 'react';
import axios from 'axios';
import BetOptions from './BetOptions.js';
import Dice from './Dice.js';
import Result from './Result.js';
import Header from './Header.js';

const Game = () => {
    const [player, setPlayer] = useState({ points: 5000 });
    const [dice, setDice] = useState([0, 0]);
    const [result, setResult] = useState(null);

    const handleBet = async ({ betAmount, betOption }) => {
        try {
            const rollResponse = await axios.post('http://localhost:5000/api/game/roll-dice', { betAmount, betOption });
            setDice(rollResponse.data.dice);
            setResult(rollResponse.data);

            const playerResponse = await axios.get('http://localhost:5000/api/game/player');
            setPlayer(playerResponse.data);
        } catch (error) {
            console.error('Error placing bet:', error);
        }
    };

    return (
        <div>
            <Header points={player.points} />
            <BetOptions onBet={handleBet} />
            <Dice dice={dice} />
            {result && <Result result={result} />}
        </div>
    );
};

export default Game;
