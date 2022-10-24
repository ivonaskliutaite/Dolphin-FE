import React, {useState} from "react";

const SignUp = () => {
    const [user, setUser] = useState<string>();
    const [pass, setPass] = useState<string>();
    const [registration, setRegistration] = useState<boolean>()

    const register = (user: string, pass: string) => {
        console.log('register');
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: user,
                password: pass
            })
        }
        fetch(`http://localhost:3005/signup`, requestOptions).then(r => {
            if (r.redirected) {
                window.location.replace(r.url);
                Promise.resolve(r);
            }
        })
    }

    const login = (user: string, pass: string) => {
        console.log('login');
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: user,
                password: pass
            })
        }
        fetch(`http://localhost:3005/login/password`, requestOptions).then(r => {
            if (r.redirected) {
                window.location.replace(r.url);
                Promise.resolve(r);
            }
        })
    }

    return (
        <div>
            <input value={user} type="text" title="Username" onChange={event => {
                setUser(event.target.value)
            }}/>
            <input value={pass} type="password" title="Password" onChange={event => {
                setPass(event.target.value)
            }}/>
            <button onClick={() => {
                if (user && pass) {
                    registration ? register(user, pass) : login(user, pass)
                }
            }}>
                {
                    registration ? 'Užsiregistruokite' : 'Prisijungti'
                }
            </button>
            {
                registration ? (<div>
                    Gal jungiatės pirmą kartą? Tuomet pirmiau <a href='#' onClick={() => {
                    setRegistration(false)
                }}>prisijunkite</a>.
                </div>) : (<div>
                    Esate užsiregistravę? Tuomet <a href='#' onClick={() => {
                    setRegistration(true)
                }}>užsiregistruokite</a>.
                </div>)
            }
        </div>
    )
}

export default SignUp