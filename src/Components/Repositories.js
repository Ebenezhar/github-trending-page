import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { config } from '../Config/config';
import UserContext from '../UserContext/UserContext';
import RepositoryCard from './RepositoryCard'

function Repositories() {
    const userContextData = useContext(UserContext);
    let userData;
    useEffect(() => {
        fetchData();
    }, [])
    let fetchData = async () => {
        try {
            userData = await axios.get(`${config.api}/repositories`);

            userContextData.setRepository(userData.data);


        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            {
                userContextData.repository ? userContextData.repository.map(((element) => {
                    return <RepositoryCard data={element} />
                })) : null
            }
        </div>
    )
}

export default Repositories