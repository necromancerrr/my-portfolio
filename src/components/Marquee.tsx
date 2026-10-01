import styles from './Marquee.module.css';

// Tilted ticker band. Decorative (every item appears elsewhere on the page), so
// it is hidden from assistive tech. Pure CSS; stops under prefers-reduced-motion.
export default function Marquee({ items }: { items: string[] }) {
    const group = (key: string) => (
        <div className={styles.group} key={key}>
            {[...items, ...items].map((item, i) => (
                <span className={styles.item} key={`${key}-${i}`}>
                    {item}
                    <span className={styles.sep}>✦</span>
                </span>
            ))}
        </div>
    );

    return (
        <div className={styles.wrap} aria-hidden="true">
            <div className={styles.band}>
                <div className={styles.track}>
                    {group('a')}
                    {group('b')}
                </div>
            </div>
        </div>
    );
}
