import React from 'react';
import useForm from '../../../hookFunctions/useForm';
// using generic reusable hooks function useForm.js

export default function FormHooksUseForm() {
    const [email, setEmail, resetEmail] = useForm('');
    const [password, setPassword, resetPass] = useForm('');
    // usually instead of reset would have a handleSubmit here
    return (
        <div>
            <h1>Your email: {email}</h1>
            <input
                type='text'
                value={email}
                onChange={setEmail}
            />
            <button onClick={resetEmail}>Reset Email</button>
            <h1>Your password: {password}</h1>
            <input
                type='text'
                value={password}
                onChange={setPassword}
            />
            <button onClick={resetPass}>Reset Password</button>
        </div>
    );
}