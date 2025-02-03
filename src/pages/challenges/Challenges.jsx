import React from 'react';
import Navbar from '../../_components/Navbar';
import ChallengesList from './ChallengesList';



const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <main>
                <ChallengesList />
            </main>
        </div>
    );
};

export default Home;
