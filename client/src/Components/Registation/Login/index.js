import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './style.module.css';

const Login = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const url = 'http://localhost:3005/user/login';

    function submit(e){
        e.preventDefault();
        axios.post(url, {User_Name: name, Email: email, Password: password}).then(resp => {console.log(resp)}).catch(err => console.log(err));

    }

    return ( 
        <form className={styles.login}>
            <input type="text" className={styles.input} placeholder='Writting username...' onChange={e => e.currentTarget.value.includes('@') ? setEmail(e.currentTarget.value) : setName(e.currentTarget.value)}/>
            <input type="password" className={styles.input} placeholder='Writting password...' onChange={e => setPassword(e.currentTarget.value)}/>
            <div className={styles.button__inner}>
                <button className={styles.button} onClick={submit}>Login</button>
            </div>
        </form>
     );
}
 
export default Login;
