import styles from './style.module.css';
import { Container } from '@mui/material';
import Logo from '../../UI/Logo';

const Footer = () => {
    return ( 
        <footer className={styles.footer}>
            <Container maxWidth='sm'>
                <div className={styles.inner}>
                    <Logo width='130px'/>
                    <div className={styles.text}>Practice React TM</div>
                </div>
            </Container>
        </footer>
     );
}
 
export default Footer;
