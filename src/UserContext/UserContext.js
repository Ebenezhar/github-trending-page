import { createContext, useState } from "react";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [repository, setRepository] = useState();
    const [developers, setDevelopers] = useState();
    return (
        <UserContext.Provider value={{ repository, setRepository, developers, setDevelopers }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContext;