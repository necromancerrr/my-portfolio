import type { MoreProject } from '@/data/portfolio';
import styles from './Work.module.css';

export default function MoreProjects({ projects }: { projects: MoreProject[] }) {
    return (
        <div className={styles.more}>
            <h3 className={styles.moreTitle}>More projects</h3>
            <ul className={`nb-card ${styles.moreList}`}>
                {projects.map((p) => {
                    const inner = (
                        <>
                            <span className={styles.moreName}>{p.name}</span>
                            <span className={styles.moreBlurb}>{p.blurb}</span>
                            <span className={`mono ${styles.moreStack}`}>{p.stack.join(' · ')}</span>
                            <span className={styles.moreArrow} aria-hidden="true">{p.href ? '↗' : ''}</span>
                        </>
                    );
                    return (
                        <li key={p.name}>
                            {p.href ? (
                                <a href={p.href} target="_blank" rel="noopener noreferrer" className={`${styles.moreRow} ${styles.moreLink}`}>
                                    {inner}
                                </a>
                            ) : (
                                <div className={styles.moreRow}>{inner}</div>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
