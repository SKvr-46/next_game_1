import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ScorePage: NextPage = () => {
    const [score, setScore] = useState(0);
    const router = useRouter();

    useEffect(() => {
        const { score: scoreParam } = router.query;
        if (typeof scoreParam === 'string') {
        const newScore = Number(scoreParam);
        setScore(newScore);
        }
    }, []);

    return (
        <div>
        <h1>Your Score: {score}</h1>
        <button onClick={() => router.push('/')}>Play Again</button>
        </div>
    );
};

export default ScorePage;
