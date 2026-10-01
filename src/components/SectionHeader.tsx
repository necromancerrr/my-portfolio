import type { ReactNode } from 'react';
import Reveal from './Reveal';
import styles from './Section.module.css';

interface SectionHeaderProps {
    index: number;
    label: string;
    title: ReactNode;
    sub?: ReactNode;
    id?: string;
}

export default function SectionHeader({ index, label, title, sub, id }: SectionHeaderProps) {
    return (
        <Reveal className={styles.head}>
            <span className="nb-tag">
                {String(index).padStart(2, '0')} / {label}
            </span>
            <h2 id={id} className={styles.title}>{title}</h2>
            {sub && <p className={styles.sub}>{sub}</p>}
        </Reveal>
    );
}
