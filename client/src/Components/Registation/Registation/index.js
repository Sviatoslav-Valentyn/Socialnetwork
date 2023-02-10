import axios from 'axios'
import { useState } from 'react';
import { redirect } from "react-router-dom";
import styles from './style.module.css'

const Registation = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();

    const url = 'http://localhost:3005/user/registration'
    
    function submit(e){
        e.preventDefault();

        console.log(username);

        axios.post(url, {
            User_Name: username,
            Password: password,
            Email: email,
            PhoneNumber: number,
        })
        .then(function (response) {
            if(response.status === 200){
                console.log('ok');
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return ( 
        <form className={styles.login} method="POST" action='http://localhost:3005/user/registration'> 
            <input type="text" className={styles.input} placeholder='Writting username...' onChange={e => setUsername(e.currentTarget.value)}/>
            <input type="password" className={styles.input} placeholder='Writting password...' onChange={e => setPassword(e.currentTarget.value)}/>
            <input type="email" className={styles.input} placeholder='Writting email...' onChange={e => setEmail(e.currentTarget.value)}/>
            <input type="number" className={styles.input} placeholder='Writting number...' onChange={e => setNumber(e.currentTarget.value)}/>
            <div className={styles.button__inner}>
                <button className={styles.button} onClick={submit}>Registration</button>
            </div>
        </form>
     );
}
 
export default Registation;
