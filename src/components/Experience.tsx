import { experience, leadership } from '@/data/portfolio';
import Reveal from './Reveal';
import styles from './Experience.module.css';

export default function Experience() {
    return (
        <>
            <ol className={styles.list}>
                {experience.map((job, i) => (
                    <li key={job.company}>
                        <Reveal delay={i * 0.05}>
                            <article className={`nb-card ${styles.job} ${job.highlight ? 'fill-sky' : ''}`}>
                                <div className={styles.side}>
                                    <span className="nb-tag">{job.date}</span>
                                    <p className={styles.company}>{job.company}</p>
                                    {job.program && <p className={`mono ${styles.program}`}>{job.program}</p>}
                                </div>
                                <div className={styles.main}>
                                    <h3 className={styles.role}>{job.role}</h3>
                                    <ul className={styles.points}>
                                        {job.points.map((point) => (
                                            <li key={point}>{point}</li>
                                        ))}
                                    </ul>
                                    {job.stack && (
                                        <ul className={styles.stack} aria-label="Tech used">
                                            {job.stack.map((s) => (
                                                <li key={s} className="nb-chip">{s}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </article>
                        </Reveal>
                    </li>
                ))}
            </ol>

            <Reveal className={styles.leadership}>
                <h3 className={styles.subTitle}>Leadership &amp; learning</h3>
                <ul className={`nb-card ${styles.rows}`}>
                    {leadership.map((item) => (
                        <li key={item.org} className={styles.row}>
                            <div>
                                <p className={styles.rowRole}>{item.role}</p>
                                <p className={styles.rowOrg}>{item.org}</p>
                            </div>
                            <p className={styles.rowBlurb}>{item.blurb}</p>
                            <p className={`mono ${styles.rowDate}`}>{item.date}</p>
                        </li>
                    ))}
                </ul>
            </Reveal>
        </>
    );
}
