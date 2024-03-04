import React, {createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthContertProvider = ({ children }) => {
    const [isLoggin, setLoggin] = useState(false);
    const [isSignup, setSignup] = useState(false);
    return <AuthContext.Provider value={{ isLoggin, setLoggin,setSignup,isSignup }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContertProvider;