import { SignInButton } from '../SignInButton';
import styles from './header.module.scss'

export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <div className={styles.headerLeft}>
                    <img src="/images/logo.svg" alt="ig.news" />
                    <nav>
                        <a href="" className={styles.active}>Home</a>
                        <a href="">Posts</a>
                    </nav>
                </div>

                <SignInButton />

            </div>
        </header>
    );
}