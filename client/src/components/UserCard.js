import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserCard = ({ username }) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}`)
            .then((res) => {
                setUserData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [username]);

    return (
        <div className='card w-75 mb-3 m-auto text-bg-dark'>
            <div className='card-body'>
                <h1>{userData.login}</h1>
                <Link to={`/profile/${username}`}>
                    <img src={userData.avatar_url} alt={`Avatar for ${userData.login}`} width='100' height='100' />
                </Link>
                
                
                <h4>Followers: {userData.followers}</h4>
            </div>
        </div>
    );
};

export default UserCard;