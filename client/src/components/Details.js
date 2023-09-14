import React, { useState, useEffect} from 'react'; 
import UserCard from './UserCard';
import './UserCard.css';

const GitHubUser = () => {
    const usernames = ['codemista247', 'mbarajas', 'nategurian', 'defunkt', 'pjhyett', 'GalacticKnight' ];

    return(
        <div className='UserCard'>
            {usernames.map((username, index) => (
                <UserCard key={username} username={username} /> 
            ))}
        </div>
    );
};


export default GitHubUser;