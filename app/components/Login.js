// pages/login.js
"use client"
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Login() {
//   const { login } = useAuth();
//   const {login}=useAuth()
  const auth=useAuth()
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   await login(username, password);
    console.log('user name',username,password)
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black-500">
      <div className="bg-grey-100 shadow-md rounded p-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control my-4">
            <label className="label">Username</label>
            <input
              className="input input-bordered w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              required
            />
          </div>
          <div className="form-control my-4">
            <label className="label">Password</label>
            <input
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
