import { useRef, useState } from 'react';
import Login from '../Login';
import Registation from '../Registation';
import styles from './style.module.css'

const SwitchButtons = () => {
    const [toggleIndex, setToggleIndex] = useState(1)
    // let className;


    function addActive(index){
        setToggleIndex(index)
    }

    return (
        <>
            <div className={styles.buttons}>
                <button className={toggleIndex === 1 ? styles.button + ' ' + styles.active : styles.button} onClick={() => addActive(1)}>Login</button>
                <button className={toggleIndex === 2 ? styles.button + ' ' + styles.active : styles.button} onClick={() => addActive(2)}>Registration</button>
            </div>

            {toggleIndex === 1 ? <Login /> : <Registation />}
        </>
     );
}
 
export default SwitchButtons;