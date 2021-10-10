import React from 'react';
import "./userSignIn.css";
import UserSignInRight from './UserSignInRight';
import UserSignInLeft from './UserSignInLeft';

export default function UserSignIn() {
    return (
        <section className="right_left">
            <UserSignInLeft title="PobWork"/>
            <UserSignInRight />
        </section>
    )
}
