import React, { useContext, useState } from 'react';
import Styles from './Login.module.css';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContertProvider';
import { useToast } from '@chakra-ui/react';


const Login = () => {

    const { isLoggin, setLoggin } = useContext(AuthContext);
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const Toast = useToast();

    function handelSubmit(e) {
        e.preventDefault();
        const Info = JSON.parse(localStorage.getItem('data')) || [];

        if (Info.email === email && Info.password == password) {
            setLoggin(true);
        } else {
            Toast({
                title: 'error',
                description: "Invalid Credentials",
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: "top-center",
            })
        }
    }

    if (isLoggin) {
        return <Navigate to="/Cart" />
    }

    return (
        <>
            <div className={Styles.navbar}>
                <div>
                    <Link to='/login'>Login Page</Link>
                </div>
                <div>
                    <Link to='/Signup'>Signup Page</Link>
                </div>
                <div>
                    <Link to='/Cart'>Cart Page</Link>
                </div>
            </div>

            <div className={Styles.parent}>
                <div className={Styles.child}>
                    <div className={Styles.child_1}>
                        <img src="https://m.media-amazon.com/images/G/01/Zappos/25th-birthday-logo/Zappos-25-Years-Logo-Site.svg" />
                    </div>

                    <h3>Sign in</h3>
                    <form onSubmit={handelSubmit}>
                        <label>EMAIL</label>
                        <br />
                        <input required value={email} id="email" type="email" placeholder="Email" onChange={(e) => SetEmail(e.target.value)} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <label>PASSWORD</label>
                        <br />
                        <input required value={password} id="password" type="text" placeholder="Password" onChange={(e) => SetPassword(e.target.value)} />
                        <br />
                        <button id="btn" className={Styles.btn_1}>Sign in</button>
                    </form>
                    <div className={Styles.anchor}><Link to='/Signup'>New to E-commerce? Sign up</Link> </div>
                </div>
            </div>

        </>
    )
}

export default Login;