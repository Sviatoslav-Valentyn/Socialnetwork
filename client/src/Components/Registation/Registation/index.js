import axios from 'axios'
import { useState } from 'react';
import styles from './style.module.css'

const Registation = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();
    
    function submit(e){
        e.preventDefault();
        console.log(username);
        console.log(password);
        console.log(email);
        console.log(number);

        axios.post('http://localhost:3001/registration', {
            name: username,
            password: password,
            email: email,
            number: number,
        })
            .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    }

    return ( 
        <form className={styles.login} action='http://localhost:3001/registration' method='POST'> 
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
