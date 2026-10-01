import { education, skills, stats } from '@/data/portfolio';
import { site } from '@/lib/site';
import CountUp from './CountUp';
import Icon from './Icon';
import Marker from './Marker';
import Reveal from './Reveal';
import styles from './About.module.css';

export default function About() {
    return (
        <div className={styles.bento}>
            <Reveal className={`nb-card ${styles.tile} ${styles.bio}`}>
                <p className={styles.bioLead}>
                    I’m a CS student at the University of Washington who <Marker>learns by building</Marker>.
                </p>
                <p>
                    This summer I was a Software Engineering Intern at Google through Break Through Tech,
                    building the frontend for an AI career-exposure tool. Outside class I’m building LoopIn, a
                    university app for study sessions and campus events, and openroles.ai, a live board for
                    internship and new-grad roles.
                </p>
                <p>
                    I also ship features for the UW Blockchain Society, help run events for the Google
                    Development Club, and teach Python and mixed-reality workshops with AVELA. I started at
                    Highline College before transferring to UW, and I care about thoughtful code and software
                    people actually want to use.
                </p>
            </Reveal>

            <Reveal delay={0.06} className={`nb-card fill-sky ${styles.tile} ${styles.edu}`}>
                <p className={`mono ${styles.label}`}>Education</p>
                <ul className={styles.eduList}>
                    {education.map((e) => (
                        <li key={e.school}>
                            <p className={styles.eduSchool}>{e.school}</p>
                            <p className={styles.eduDegree}>{e.degree}</p>
                            <p className={`mono ${styles.eduDate}`}>{e.date}</p>
                        </li>
                    ))}
                </ul>
            </Reveal>

            <Reveal delay={0.12} className={`nb-card fill-sun ${styles.tile} ${styles.place}`}>
                <p className={`mono ${styles.label}`}>Based in</p>
                <p className={styles.placeName}>{site.location}</p>
            </Reveal>

            {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.05 * i} className={`nb-card ${styles.tile} ${styles.stat}`}>
                    <p className={styles.statValue}>
                        <CountUp to={s.to} from={s.from} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
                    </p>
                    <p className={styles.statLabel}>{s.label}</p>
                </Reveal>
            ))}

            <Reveal className={`nb-card ${styles.tile} ${styles.skills}`}>
                <h3 className={styles.skillsTitle}>Toolbox</h3>
                <div className={styles.groups}>
                    {skills.map((group) => (
                        <div key={group.name}>
                            <p className={`mono ${styles.label}`}>{group.name}</p>
                            <ul className={styles.chips}>
                                {group.items.map((item) => (
                                    <li key={item.name} className="nb-chip">
                                        <Icon name={item.icon} size={15} />
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Reveal>
        </div>
    );
}
