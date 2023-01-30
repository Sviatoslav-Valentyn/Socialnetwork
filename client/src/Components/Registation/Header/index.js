import { Container } from '@mui/material';
import Logo from '../../UI/Logo'
import styles from './style.module.css'

const Header = () => {
    return ( 
        <header className={styles.header}>
            <Container maxWidth='xl'>
                <div className={styles.inner}>
                    <Logo></Logo>
                </div>
            </Container>
        </header>
     );
}
 
export default Header;