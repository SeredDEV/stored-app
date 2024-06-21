import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const emailExists = users.some(user => user.email.toLowerCase() === formData.email.toLowerCase());

        if (emailExists) {
            setErrorMessage(`El usuario con el correo ${formData.email} ya existe.`);
        } else {
            users.push(formData);
            localStorage.setItem('users', JSON.stringify(users));
            setSuccessMessage('Usuario creado con éxito');
            setTimeout(() => {
                navigate('/login');
            }, 1500);
        }
    };

    return (
        <div className="w-full py-28 bg-gradient-to-b from-[#F23131] to-[#e1ffea22] pt-32">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white mx-auto p-8 shadow-lg">
                <h1 className="text-3xl font-bold mb-4 text-center">Sign Up</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder='Your Name'
                        value={formData.name}
                        onChange={handleInputChange}
                        className="h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder='Email Address'
                        value={formData.email}
                        onChange={handleInputChange}
                        className="h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleInputChange}
                        className="h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        required
                    />
                    <button type="submit" className="h-12 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors duration-300 ease-in-out">Sign Up</button>
                </form>
                {errorMessage && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4" role="alert">
                        <strong className="font-bold">Error: </strong>
                        <span className="block sm:inline">{errorMessage}</span>
                    </div>
                )}
                {successMessage && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
                        <strong className="font-bold">Éxito: </strong>
                        <span className="block sm:inline">{successMessage}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Signup;