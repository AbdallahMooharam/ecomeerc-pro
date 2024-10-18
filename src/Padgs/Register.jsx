import React, { useState } from 'react';
import { useFormik } from 'formik';
import { motion } from 'framer-motion';

const Register = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const loginFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('Login:', values);
      // تنفيذ تسجيل الدخول هنا
    },
  });

  const registerFormik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      console.log('Register:', values);
      // تنفيذ التسجيل هنا
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <button className="mb-4" onClick={toggleForm}>
          {isLogin ? 'Switch to Register' : 'Switch to Login'}
        </button>
        
        <motion.div
          key={isLogin ? 'login' : 'register'}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
        >
          {isLogin ? (
            <form onSubmit={loginFormik.handleSubmit}>
              <h2 className="text-xl mb-4">Login</h2>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  onChange={loginFormik.handleChange}
                  value={loginFormik.values.email}
                  className="border rounded w-full py-2 px-3 mb-4"
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  onChange={loginFormik.handleChange}
                  value={loginFormik.values.password}
                  className="border rounded w-full py-2 px-3 mb-4"
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Login
              </button>
            </form>
          ) : (
            <form onSubmit={registerFormik.handleSubmit}>
              <h2 className="text-xl mb-4">Register</h2>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  onChange={registerFormik.handleChange}
                  value={registerFormik.values.email}
                  className="border rounded w-full py-2 px-3 mb-4"
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  onChange={registerFormik.handleChange}
                  value={registerFormik.values.password}
                  className="border rounded w-full py-2 px-3 mb-4"
                />
              </div>
              <div>
                <label>Confirm Password:</label>
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={registerFormik.handleChange}
                  value={registerFormik.values.confirmPassword}
                  className="border rounded w-full py-2 px-3 mb-4"
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                Register
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
