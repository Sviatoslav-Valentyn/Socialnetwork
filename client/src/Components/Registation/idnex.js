import Header from "./Header";
import SwitchButtons from "./SwitchButtons";
import Login from "./Login";
import styles from './style.module.css'

const Registation = () => {
    return ( 
        <div style={{height: '100vh'}}>
            {/* <Header /> */}
            <div className={styles.form}>
                <div className={styles.form__inner}>
                    <SwitchButtons />
                </div>
            </div>
        </div>
     );
}
 
export default Registation;