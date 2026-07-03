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

export default function ProjectCard({ title, description, tags, link, date, status, index = 0 }: ProjectCardProps) {
    const entranceDelay = index * 0.15;
    const baseRotation = index % 2 === 0 ? -1 : 1;

    const fileName = title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');

    const handleCardClick = () => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <motion.div
            className="floating-project-card"
            initial={{ opacity: 0, y: 40, rotate: baseRotation * 2 }}
            whileInView={{
                opacity: 1,
                y: 0,
                rotate: baseRotation,
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: entranceDelay, ease: 'easeOut' }}
            whileHover={{
                scale: 1.02,
                rotate: 0,
                y: -10,
                transition: { duration: 0.3 }
            }}
            onClick={handleCardClick}
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: link ? 'pointer' : 'default',
                background: 'var(--card-bg)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--glass-border)',
                boxShadow: 'var(--glass-shadow), var(--glass-inner-border)',
            }}
        >
            {/* IDE Window Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 16px',
                gap: '8px',
                borderBottom: '1px solid var(--glass-border)',
                background: 'var(--glass-bg)',
            }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
                <span style={{
                    marginLeft: '12px',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono), monospace',
                }}>
                    {fileName}.tsx
                </span>
                <span style={{
                    marginLeft: 'auto',
                    fontSize: '10px',
                    color: 'var(--primary-color)',
                    fontFamily: 'var(--font-mono), monospace',
                }}>
                    ● saved
                </span>
            </div>

            {/* Code Content */}
            <div style={{
                flex: 1,
                padding: '16px 20px',
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '12px',
                lineHeight: 1.8,
                overflow: 'hidden',
            }}>
                {/* Line numbers gutter */}
                <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{
                        color: 'var(--text-muted)',
                        opacity: 0.4,
                        userSelect: 'none',
                        textAlign: 'right',
                        minWidth: '20px',
                    }}>
                        {Array.from({ length: 14 }, (_, i) => (
                            <div key={i}>{i + 1}</div>
                        ))}
                    </div>

                    {/* Code content */}
                    <div style={{ flex: 1 }}>
                        {/* Import */}
                        <div>
                            <span style={{ color: '#e879f9' }}>import</span>
                            <span style={{ color: 'var(--text-color)' }}> {'{ '}</span>
                            <span style={{ color: '#60a5fa' }}>Project</span>
                            <span style={{ color: 'var(--text-color)' }}>{' }'} </span>
                            <span style={{ color: '#e879f9' }}>from</span>
                            <span style={{ color: '#22c55e' }}> {"'portfolio'"}</span>
                        </div>

                        {/* Empty line */}
                        <div>&nbsp;</div>

                        {/* Comment - Description */}
                        <div style={{ color: '#6b7280' }}>{'/**'}</div>
                        <div style={{ color: '#6b7280' }}> * {description}</div>
                        <div style={{ color: '#6b7280' }}> */</div>

                        {/* Empty line */}
                        <div>&nbsp;</div>

                        {/* Export */}
                        <div>
                            <span style={{ color: '#e879f9' }}>export const</span>
                            <span style={{ color: '#fb923c' }}> {title.split(' ')[0]}</span>
                            <span style={{ color: 'var(--text-color)' }}> = {'{'}</span>
                        </div>

                        {/* Name property */}
                        <div style={{ paddingLeft: '16px' }}>
                            <span style={{ color: '#60a5fa' }}>name</span>
                            <span style={{ color: 'var(--text-color)' }}>: </span>
                            <span style={{ color: '#22c55e' }}>{`"${title}"`}</span>
                            <span style={{ color: 'var(--text-color)' }}>,</span>
                        </div>

                        {/* Date property */}
                        <div style={{ paddingLeft: '16px' }}>
                            <span style={{ color: '#60a5fa' }}>date</span>
                            <span style={{ color: 'var(--text-color)' }}>: </span>
                            <span style={{ color: '#22c55e' }}>{`"${date}"`}</span>
                            <span style={{ color: 'var(--text-color)' }}>,</span>
                        </div>

                        {/* Stack property */}
                        <div style={{ paddingLeft: '16px' }}>
                            <span style={{ color: '#60a5fa' }}>stack</span>
                            <span style={{ color: 'var(--text-color)' }}>: [</span>
                            {tags.map((tag, i) => (
                                <span key={tag}>
                                    <span style={{ color: '#22c55e' }}>{`"${tag}"`}</span>
                                    {i < tags.length - 1 && <span style={{ color: 'var(--text-color)' }}>, </span>}
                                </span>
                            ))}
                            <span style={{ color: 'var(--text-color)' }}>],</span>
                        </div>

                        {/* Status property */}
                        <div style={{ paddingLeft: '16px' }}>
                            <span style={{ color: '#60a5fa' }}>status</span>
                            <span style={{ color: 'var(--text-color)' }}>: </span>
                            <span style={{ color: '#a78bfa' }}>{status || (link ? 'DEPLOYED' : 'IN_PROGRESS')}</span>
                            <span style={{ color: 'var(--text-color)' }}>,</span>
                        </div>

                        {/* Close object */}
                        <div>
                            <span style={{ color: 'var(--text-color)' }}>{'}'}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Status Bar */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 16px',
                gap: '16px',
                borderTop: '1px solid var(--glass-border)',
                background: 'var(--glass-bg)',
                fontSize: '10px',
                fontFamily: 'var(--font-mono), monospace',
                color: 'var(--text-muted)',
            }}>
                <span style={{ color: '#22c55e' }}>● TypeScript</span>
                <span>Ln 14, Col 1</span>
                <span style={{ marginLeft: 'auto' }}>UTF-8</span>
                {link && (
                    <motion.a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ color: 'var(--primary-color)' }}
                        style={{ color: 'var(--text-muted)', textDecoration: 'none' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        → View Project
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
}
