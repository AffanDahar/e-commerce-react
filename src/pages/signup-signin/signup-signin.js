import React from 'react'
import Signin from '../../components/signin/Signin';
import Signup from '../../components/signup/Signup';
import './signin-signup.styles.scss'

const SignupSignin = () => {
    return (
        <div className='signin-singup' >
            <Signin/>
            <Signup/>
        </div>
    )
}

export default SignupSignin
