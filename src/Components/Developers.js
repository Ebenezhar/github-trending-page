import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { isNonNullChain } from 'typescript';
import { config } from '../Config/config';
import UserContext from '../UserContext/UserContext';
import DeveloperCard from './DeveloperCard'

function Developers() {
    const userContextData = useContext(UserContext);
    useEffect(() => {
        fetchData();
    }, [])
    let fetchData = async () => {
        try {
            const userData = await axios.get(`${config.api}/developers`);
            userContextData.setDevelopers(userData.data);
            console.log(userContextData.developers);
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div >
            {
                userContextData.developers ? userContextData.developers.map(((element) => {
                    return <DeveloperCard data={element} />
                })) : null
            }

        </div>
    )
}

export default Developers