import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { message } from 'antd';

function userSignup() {
    const { login } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const registerUser = async (values) => {

        if (values.password !== values.passwordConfirm) {
            return setError('Passwords are not the same');
        }

        try {
            setError(null);
            setLoading(false);
            const res = await fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })

            const data = await res.json();

            if (res.status === 201) {
                message.success(data.message);
                login(data.token, data.user);
            } else if (res.status === 400) {
                setError(data.message);
            } else {
                message.error('Registration Failed');
            }
        }catch (error) {
            message.error('Registration Failed');
        } 
        finally {
            setLoading(false);
        }
    }

    return ({ loading, error, registerUser });
}

export default userSignup;
