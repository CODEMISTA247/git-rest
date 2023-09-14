import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const { username } = useParams();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}`)
            .then((res) => {
                setUserData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [username]);



    return (
        <div className='card  mb-3'>
            <div className='card-body'>
                <div className='profile-container'>
                    <img className='profile-image' src={userData.avatar_url} 
                        alt={`Avatar for ${userData.login}`} 
                    />
                    <div className='info'>
                        <h1>{userData.login}</h1>
                        <h6>{userData.name}</h6>
                        <ul>
                            <li>Followers: {userData.followers}</li>
                            <li>Following: {userData.following}</li>
                            <li>Location: {userData.location} </li>
                            <li>Bio: {userData.bio}</li>
                            <li>
                                <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                                    <button type="button">Check out my Github</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link to="/">
                    <button type="back">Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Profile;