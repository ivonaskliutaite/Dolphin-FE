import React, {useState} from "react";

const SignUp = () => {
    const [user, setUser] = useState<string>();
    const [pass, setPass] = useState<string>();

    return (
        <div>
            <input value={user} type="text" title="Username" onChange={event => {
                setUser(event.target.value)
            }}/>
            <input value={pass} type="password" title="Password" onChange={event => {
                setPass(event.target.value)
            }}/>
            <button onClick={() => {
                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        username: user,
                        password: pass
                    })
                };
                fetch(`http://localhost:3005/login/password`, requestOptions)
                    .then(r => {
                        if (r.redirected) {
                            window.location.replace(r.url);
                            return Promise.resolve(r);
                        }
                        return r;
                    })
                    .then(response => response.json())
            }}>Login</button>
            <button onClick={() => {
                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        username: user,
                        password: pass
                    })
                };
                fetch(`http://localhost:3005/signup`, requestOptions)
                    .then(response => response.json())
            }}>Sign Up</button>
        </div>
)
}

export default SignUp