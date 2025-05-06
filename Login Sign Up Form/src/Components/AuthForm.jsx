import React from 'react'
import { useState } from 'react'

function AuthForm() {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className='conatiner'>
            <div className='form-container'>
                <div className='form-toggle'>
                    <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
                    <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>SignUp</button>
                </div>
                {isLogin ?
                    <>
                        <div className='form'>
                            <h2>Login Form</h2>
                            <input type="email" placeholder='Email Address' required />
                            <input type="password" placeholder='Password' required />
                            <a href="#">Forgot Password?</a>
                            <button>Login</button>
                            <p>Not a Member? <a href="#" onClick={() => setIsLogin(false)}>Signup ow</a></p>
                        </div>
                    </>
                    : <>
                        <div className='form'>
                            <h2>Signup Form</h2>
                            <input type="email" placeholder='Email Address' required />
                            <input type="password" placeholder='Password' required />
                            <input type="password" placeholder='Confirm Password' required />
                            <button>Signup</button>
                        </div>
                    </>}
            </div>
        </div>
    )
}

export default AuthForm
