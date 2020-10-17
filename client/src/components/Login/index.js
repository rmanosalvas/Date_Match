import React from 'react';

function Login() {
    return (
        <div>
            <form className="form-group mt-5 mb-5">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <input className="form-control mb-5" placeholder="Email address" />
                <input className="form-control mb-5" placeholder="Password" />
                <div className="row">
                <a role="button" class="btn btn-md btn-primary col" href="/dashboard" role="button">Sign In</a>
                <a role="button" class="btn btn-md btn-info col" href="/signup" role="button">Sign Up</a>
                </div>
            </form>
        </div>
    );
}



export default Login;