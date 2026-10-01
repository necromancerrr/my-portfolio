import { site } from '@/lib/site';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <span>© {new Date().getFullYear()} {site.name}</span>
                <span>{site.location}</span>
                <a href="#top" className={styles.top}>
                    Back to top <span aria-hidden="true">↑</span>
                </a>
            </div>
        </footer>
    );
}
