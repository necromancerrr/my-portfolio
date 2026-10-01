import Image from 'next/image';
import type { FeaturedProject } from '@/data/portfolio';
import styles from './Work.module.css';

const accentClass = { sky: 'fill-sky', sun: 'fill-sun', teal: 'fill-teal' } as const;

// Highlight strings and comments in the code sample using the palette.
function CodeLine({ line }: { line: string }) {
    if (line.trim().startsWith('//')) return <span className={styles.tokComment}>{line}</span>;
    const parts = line.split(/('[^']*')/g);
    return (
        <>
            {parts.map((part, i) =>
                part.startsWith("'") ? (
                    <span key={i} className={styles.tokString}>{part}</span>
                ) : (
                    <span key={i}>
                        {part.split(/\b(var|require)\b/g).map((p, j) =>
                            p === 'var' || p === 'require' ? (
                                <span key={j} className={styles.tokKeyword}>{p}</span>
                            ) : (
                                p
                            ),
                        )}
                    </span>
                ),
            )}
        </>
    );
}

export default function WorkCard({ project, index }: { project: FeaturedProject; index: number }) {
    const flip = index % 2 === 1;

    return (
        <article className={`nb-card nb-card--lift ${styles.card} ${flip ? styles.flip : ''}`}>
            <div className={styles.media}>
                <div className={`${accentClass[project.accent]} ${styles.bar}`}>
                    <span className={styles.dots} aria-hidden="true">
                        <i />
                        <i />
                        <i />
                    </span>
                    <span className={`mono ${styles.host}`}>{project.host}</span>
                    {project.live && <span className="nb-live">LIVE</span>}
                </div>

                {project.image ? (
                    <div className={styles.shot}>
                        <Image
                            src={project.image.src}
                            alt={project.image.alt}
                            width={project.image.width}
                            height={project.image.height}
                            sizes="(max-width: 900px) 100vw, 640px"
                        />
                    </div>
                ) : (
                    <pre className={`mono ${styles.code}`}>
                        <code>
                            {project.code?.map((line, i) => (
                                <span className={styles.codeLine} key={i}>
                                    <span className={styles.lineNo} aria-hidden="true">{i + 1}</span>
                                    <CodeLine line={line} />
                                    {'\n'}
                                </span>
                            ))}
                        </code>
                    </pre>
                )}
            </div>

            <div className={styles.body}>
                <p className={`mono ${styles.meta}`}>
                    {project.role} <span aria-hidden="true">·</span> {project.date}
                </p>
                <h3 className={styles.name}>{project.name}</h3>
                <p className={styles.tagline}>{project.tagline}</p>
                <p className={styles.desc}>{project.description}</p>
                <ul className={styles.stack} aria-label="Tech stack">
                    {project.stack.map((s) => (
                        <li key={s} className="nb-chip">{s}</li>
                    ))}
                </ul>
                <div className={styles.links}>
                    {project.links.map((link, i) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`nb-btn nb-btn--sm ${i === 0 ? 'nb-btn--sky' : ''}`}
                        >
                            {link.label} <span aria-hidden="true">↗</span>
                        </a>
                    ))}
                </div>
            </div>
        </article>
    );
}
