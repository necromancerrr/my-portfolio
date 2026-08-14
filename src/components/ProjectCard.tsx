"use client";

import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    role: string;
    impact: string;
    link?: string;
    date: string;
    status?: string;
    index?: number;
}

const statusLabels: Record<string, string> = {
    IN_PROGRESS: 'In progress',
    COMPLETE: 'Complete',
    DEPLOYED: 'Deployed',
};

export default function ProjectCard({
    title,
    description,
    tags,
    role,
    impact,
    link,
    date,
    status,
    index = 0,
}: ProjectCardProps) {
    const displayStatus = status ? statusLabels[status] ?? status : link ? 'Deployed' : 'In progress';
    const content = (
        <>
            <div className="project-card-meta">
                <span>{role}</span>
                <span>{date}</span>
            </div>

            <h3>{title}</h3>
            <p>{description}</p>

            <div className="project-card-impact">
                <span>Impact</span>
                <strong>{impact}</strong>
            </div>

            <div className="project-card-tags">
                {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>

            <div className="project-card-footer">
                <span>{displayStatus}</span>
                <span aria-hidden="true">-&gt;</span>
            </div>
        </>
    );

    if (link) {
        return (
            <motion.a
                className="project-card"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{
                    y: -6,
                    transition: { duration: 0.25 },
                }}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.article
            className="project-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
                y: -6,
                transition: { duration: 0.25 },
            }}
        >
            {content}
        </motion.article>
    );
}
