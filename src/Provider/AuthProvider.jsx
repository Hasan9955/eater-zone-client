import { createContext, useState } from "react";


const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState()

    const authInfo = {
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;