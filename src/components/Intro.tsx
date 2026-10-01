import Link from 'next/link';
import { site } from '@/lib/site';
import Reveal from './Reveal';
import Star from './Star';
import styles from './Intro.module.css';

// Minimal opener: one statement, then straight into the work.
export default function Intro() {
    return (
        <section className={styles.intro} aria-labelledby="intro-title">
            <div className={`container ${styles.inner}`}>
                <Reveal onMount delay={0.05}>
                    <span className="nb-sticker">Prev. SWE Intern @ Google</span>
                </Reveal>

                <Reveal onMount delay={0.15}>
                    <h1 id="intro-title" className={styles.title}>
                        I build clean, <span className={styles.boxed}>useful</span> software, from campus apps
                        to AI tools.
                    </h1>
                </Reveal>

                <Reveal onMount delay={0.28}>
                    <p className={`mono ${styles.meta}`}>
                        <span>{site.name}</span>
                        <span className={styles.sep} aria-hidden="true">/</span>
                        <span>CS @ University of Washington ’27</span>
                        <span className={styles.sep} aria-hidden="true">/</span>
                        <span>{site.location}</span>
                    </p>
                </Reveal>

                <Reveal onMount delay={0.38}>
                    <div className={styles.ctas}>
                        <a href="#work" className="nb-btn nb-btn--sky">
                            See my work <span aria-hidden="true">↓</span>
                        </a>
                        <Link href="/resume" className="nb-btn">
                            Resume <span aria-hidden="true">↗</span>
                        </Link>
                    </div>
                </Reveal>
            </div>

            <Star className={styles.star} />
        </section>
    );
}
