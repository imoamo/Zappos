import React, { useContext } from 'react'
import { AuthContext } from './AuthContertProvider';
import { Navigate } from 'react-router-dom';

const PrivateComponent = ({ children }) => {
    const { isLoggin } = useContext(AuthContext);

    if (!isLoggin) {
        return <Navigate to='/login' />
    }

    return <div>
        {children}
    </div>
}

export default PrivateComponent;