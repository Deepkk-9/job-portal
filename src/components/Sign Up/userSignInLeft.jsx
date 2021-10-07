import React from 'react'
import "./userSignIn.css";
import { Link } from "react-router-dom";

export default function userSignUpLeft() {
    return (
        <section className="left">
            <figure>
                <figcaption>
                    PobWork
                </figcaption>

                <img src="/job-portal/assets/icons/PWlogo.svg" alt="logo" />
            </figure>

            <section className="card">

                <h2>Sign In</h2>

                <label htmlFor="mail_phno">Email or phone</label>
                <input id="mail_phno"></input>

                <label htmlFor="mail_phno">Password</label>
                <input id="mail_phno"></input>

                <Link exact="true" to="/ForgotPassword">ForgotPassword?</Link>

                <button>Sign In</button>
            </section>

            <p>New to PobWork? Join Now</p>
        </section>
    )
}
