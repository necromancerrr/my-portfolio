import Link from 'next/link';
import { site } from '@/lib/site';
import CopyEmail from './CopyEmail';
import Icon from './Icon';
import Reveal from './Reveal';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <Reveal className={`nb-card fill-sky ${styles.block}`}>
            <span className="nb-tag">04 / Contact</span>
            <h2 id="contact-title" className={styles.title}>Let’s build something.</h2>
            <p className={styles.sub}>
                Open to internships, collaborations, and good conversations about software worth shipping.
            </p>

            <div className={styles.emailRow}>
                <a href={`mailto:${site.email}`} className={`nb-btn ${styles.email}`}>
                    {site.email} <span aria-hidden="true">↗</span>
                </a>
                <CopyEmail email={site.email} />
            </div>

            <div className={styles.socials}>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="nb-btn nb-btn--icon" aria-label="LinkedIn">
                    <Icon name="linkedin" size={20} />
                </a>
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="nb-btn nb-btn--icon" aria-label="GitHub">
                    <Icon name="github" size={20} />
                </a>
                <Link href="/resume" className="nb-btn nb-btn--sun">
                    Resume <span aria-hidden="true">↗</span>
                </Link>
            </div>
        </Reveal>
    );
}
