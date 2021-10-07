import React from 'react';
import "./userSignIn.css";
import UserSignInRight from './userSignInRight';
import UserSignInLeft from './userSignInLeft';

export default function userSignUp() {
    return (
        <section className="right_left">
            <UserSignInLeft />
            <UserSignInRight />
        </section>
    )
}
