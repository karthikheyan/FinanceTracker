import React, { useState } from 'react'
import styles from './Login.module.css'
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isPending} = useLogin();

    const handleSubmit = (e)=> {
        e.preventDefault()
        login(email,password)
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

        {!isPending && <button className='btn'>Login</button>}
        {isPending && <button className='btn' disabled>loading</button>}
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default Login
