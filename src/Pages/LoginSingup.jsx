import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import useAnimationOnScroll from '../components/hooks/useAnimationOnScroll';

const LoginSignup = () => {
  const [controls, ref] = useAnimationOnScroll();
  const [loginMessage, setLoginMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const emailInput = document.querySelector('input[placeholder="Email Address"]').value;
    const passwordInput = document.querySelector('input[placeholder="Password"]').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === emailInput && user.password === passwordInput);
    if (user) {
      setLoginMessage(`¡Bienvenido, ${user.name}! Has iniciado sesión correctamente.`);
      setMessageType('success');
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } else {
      setLoginMessage('Usuario no encontrado o credenciales incorrectas');
      setMessageType('error');
    }
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
      transition={{ duration: 0.3 }}
      className="w-full py-28 bg-gradient-to-b from-[#F23131] to-[#e1ffea22] pt-32"
    >
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white mx-auto p-8 box-border">
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <div className="flex flex-col gap-6 mt-5 m-2">
          <input type="email" placeholder='Email Address' className="h-14 w-full pl-5 border-2 border-gray-200 outline-none text-gray-700 text-lg box-border" />
          <input type="password" placeholder='Password' className="h-14 w-full pl-5 border-2 border-gray-200 outline-none text-gray-700 text-lg box-border" />
        </div>
        <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded m-2">Continue</button>
        {loginMessage && (
          <div className={`${
            messageType === 'success' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700'
          } border px-4 py-3 rounded relative mt-4`} role="alert">
            <strong className="font-bold">{messageType === 'success' ? 'Éxito: ' : 'Error: '}</strong>
            <span className="block sm:inline">{loginMessage}</span>
          </div>
        )}
        <p className="text-gray-700 text-base font-medium m-2">Don't have an account? <Link to="/signup" className="text-red-600 font-semibold">Sign up here</Link></p>
        <div className="flex items-center mt-4 space-x-2.5 text-gray-700 text-sm font-medium m-2">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </motion.div>
  );
}

export default LoginSignup;