import React, {useEffect, useState} from 'react';

export const Logout = () => {
    const [logoutSuccess, setLogoutSuccess] = useState<boolean>();

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        };
        fetch(`http://localhost:3005/logout`, requestOptions)
            .then(res => {
                setLogoutSuccess(res.ok)
            })
    }, []);

    return (<div>
        {logoutSuccess ? 'Sėkmingai atsijungėte' : 'Nepavyko atsijungti'}
    </div>)
}

export default Logout;