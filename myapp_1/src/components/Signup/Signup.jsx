import React, { useContext, useEffect, useState } from 'react'
import Styles from './Signup.module.css';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthContertProvider';

const Signup = () => {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const { isSignup, setSignup } = useContext(AuthContext);

    async function handelSubmit(e) {
        e.preventDefault();
        const data = {
            email,
            password
        };
        localStorage.setItem("data", JSON.stringify(data));
        setSignup(true);
    }



    if (isSignup) {
        return <Navigate to='/login' />
    }

    return (
        <>

            <div className={Styles.navbar}>
                <div>
                    <Link to='/Signup'>Signup Page</Link>
                </div>
                <div>
                    <Link to='/login'>Login Page</Link>
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

                    <h3>Sign up</h3>
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
                        <button id="btn" className={Styles.btn_1}>Sign up</button>
                    </form>
                    <div className={Styles.anchor}> <Link to='/login'>Already have an account ? Sign in</Link></div>

                </div>
            </div>
        </>
    )
}
export default Signup;