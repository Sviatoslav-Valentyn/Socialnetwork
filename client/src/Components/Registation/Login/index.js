import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './style.module.css'

const Login = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    

    function submit(e){
        e.preventDefault();
        console.log(name);

        axios.post('http://localhost:3001/login', {
            name: name,
            password: password
        })
            .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    }

    return ( 
        <form className={styles.login}>
            <input type="text" className={styles.input} placeholder='Writting username...' onChange={e => setName(e.currentTarget.value)}/>
            <input type="password" className={styles.input} placeholder='Writting password...'/>
            <div className={styles.button__inner}>
                <button className={styles.button} onClick={submit}>Login</button>
            </div>
        </form>
     );
}
 
export default Login;
