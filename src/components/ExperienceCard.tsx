"use client";

import { motion } from 'framer-motion';

interface ExperienceCardProps {
    role: string;
    company: string;
    date: string;
    points: string[];
    index: number;
}

export default function ExperienceCard({ role, company, date, points, index }: ExperienceCardProps) {
    return (
        <motion.article
            className="experience-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="experience-card-date">{date}</div>
            <div className="experience-card-body">
                <p className="experience-card-company">{company}</p>
                <h3>{role}</h3>
                <ul>
                    {points.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>
            </div>
        </motion.article>
    );
}
