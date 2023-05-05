import React, { useState } from 'react'
import styles from './Login.module.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log(email,password)
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles['login-form']}>
        <label>
            <span>Email</span>
            <input 
            type="text"
            onChange={(e)=> setEmail(e.target.value)}
            value={email}
             />
        </label>

        <label>
            <span>Password</span>
            <input 
            type="password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
             />
        </label>

        <button className='btn'>Login</button>
      </form>
    </div>
  )
}

export default Login
