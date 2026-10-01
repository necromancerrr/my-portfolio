import Link from 'next/link';
import { site } from '@/lib/site';
import Reveal from './Reveal';
import Star from './Star';
import styles from './Intro.module.css';

// Minimal opener: a friendly hello, then straight into the work.
export default function Intro() {
    return (
        <section className={styles.intro} aria-labelledby="intro-title">
            <div className={`container ${styles.inner}`}>
                <Reveal onMount delay={0.05}>
                    <span className="nb-sticker">Prev. SWE Intern @ Google</span>
                </Reveal>

                <Reveal onMount delay={0.15}>
                    <h1 id="intro-title" className={styles.title}>
                        Hey, I’m Yitbarek <span className={styles.wave} aria-hidden="true">👋</span>
                        <br />
                        I like <span className={styles.boxed}>building</span> things people actually use.
                    </h1>
                </Reveal>

                <Reveal onMount delay={0.28}>
                    <p className={`mono ${styles.meta}`}>
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
