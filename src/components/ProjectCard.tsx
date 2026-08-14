"use client";

import { motion } from 'framer-motion';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
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
    link,
    date,
    status,
    index = 0,
}: ProjectCardProps) {
    const displayStatus = status ? statusLabels[status] ?? status : link ? 'Deployed' : 'In progress';
    const Wrapper = link ? motion.a : motion.article;

    return (
        <Wrapper
            className="project-card"
            href={link}
            target={link ? '_blank' : undefined}
            rel={link ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
                y: -6,
                transition: { duration: 0.25 },
            }}
        >
            <div className="project-card-top">
                <span className="project-card-status">{displayStatus}</span>
                <span className="project-card-date">{date}</span>
            </div>

            <h3>{title}</h3>
            <p>{description}</p>

            <div className="project-card-tags">
                {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>

            <div className="project-card-footer">
                <span>{link ? 'Open project' : 'Case study coming soon'}</span>
                <span aria-hidden="true">-&gt;</span>
            </div>
        </Wrapper>
    );
}
