import React from 'react';

function Login() {
    return (
        <div>
            <div className="col-sm-8 offset-sm-2">
            </div>
            <h1>Create a blog post</h1>
            <form className="form-group mt-5 mb-5">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <input className="form-control mb-5" placeholder="Email address" />
                <input className="form-control mb-5" placeholder="Password" />
                <div className="row">
                <button className="btn btn-md btn-primary col" type="submit">Sign in</button>
                <a role="button" class="btn btn-md btn-info col" href="./signup.html" role="button">Sign Up</a>
                </div>
            </form>
        </div>
    );
}



export default Login;