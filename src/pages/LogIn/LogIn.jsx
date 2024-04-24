import './LogIn.css'
import {useState} from 'react'
import { logIn } from '../../services/logIn.js'



const Logear = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogIn = async (e) => {
        e.preventDefault()
        if(validatePassword() && validateEmail()){
            const user = {email:email, password:password}
            const logearUsuario = await logIn(user)
            console.log(logearUsuario)
        } else {
            console.log('b')
        } 
    }

    const validatePassword = () => {
        return password.length > 5
    }
   const validateEmail = () => {
    return /[a-z0-9]@gmail.com$/.test(email);
  };


    console.log(email,password)
  return (
    <div >
      <form className='login' onSubmit={handleLogIn}>
            <h1>Log In</h1>
                <input type="email" placeholder= "Email"  value={email} onChange={(e) => setEmail(e.target.value)} />

                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">
                SIGN UP
            </button>

        </form>
    </div>
  )
}

export default Logear
