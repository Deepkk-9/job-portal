import React from 'react'
import "./userSignIn.css";
import logo from '../../assets/icons/PWlogo.svg';
import { Link } from "react-router-dom";

export default function UserSignInLeft(props) {
    return (
        <section className="left">
            <figure>
                <figcaption>
                    {props.title}
                </figcaption>

                <img src={logo} alt="logo" />
            </figure>

            <section className="logIncard">

                <section className="card">

                    <h2>Sign in</h2>

                    <div className="input input1">
                        <input id="mail_phno"></input>
                        <label htmlFor="mail_phno">Email or phone</label>
                    </div>


                    <div className="input input2">
                        <input id="password"></input>
                        <label htmlFor="password">Password</label>
                    </div>

                    <Link className="links" exact="true" to="/ForgotPassword">Forgot Password?</Link>

                    <button>Sign in</button>
                    <p>New to {props.title}? <Link className="links" exact="true" to="/UserSignUp">Join Now</Link></p>
                </section>
            </section>

        </section>
    )
}


UserSignInLeft.defaultProps = {
    title: "Your Title"
};
