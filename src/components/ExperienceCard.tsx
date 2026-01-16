"use client";

import { motion } from 'framer-motion';

interface ExperienceCardProps {
    role: string;
    company: string;
    date: string;
    points: string[];
    index: number;
    isLast: boolean;
}

export default function ExperienceCard({ role, company, date, points, index, isLast }: ExperienceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            style={{
                display: 'flex',
                gap: '24px',
                position: 'relative',
            }}
        >
            {/* Timeline */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
            }}>
                {/* Circle marker */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'var(--card-bg)',
                        backdropFilter: 'blur(10px)',
                        border: '3px solid var(--primary-color)',
                        boxShadow: '0 0 20px rgba(60, 137, 231, 0.3)',
                        zIndex: 2,
                        flexShrink: 0,
                        marginTop: '8px',
                        willChange: 'transform',
                    }}
                />
                {/* Vertical line */}
                {!isLast && (
                    <div style={{
                        width: '2px',
                        flex: 1,
                        background: 'linear-gradient(180deg, var(--primary-color) 0%, var(--glass-border) 100%)',
                        marginTop: '8px',
                    }} />
                )}
            </div>

            {/* Card */}
            <motion.div
                whileHover={{
                    y: -4,
                    transition: { duration: 0.3 }
                }}
                style={{
                    flex: 1,
                    background: 'var(--card-bg)',
                    backdropFilter: 'blur(24px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                    borderRadius: '20px',
                    padding: '28px',
                    marginBottom: isLast ? '0' : '24px',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--glass-shadow), var(--glass-inner-border)',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'default',
                    willChange: 'transform', // Optimization
                }}
            >
                {/* Glass highlight */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
                }} />

                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '12px',
                    marginBottom: '8px'
                }}>
                    <h3 style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        color: 'var(--text-color)',
                    }}>
                        {role}
                    </h3>
                    <span style={{
                        fontSize: '13px',
                        color: 'var(--text-muted)',
                        fontFamily: 'JetBrains Mono, monospace',
                        background: 'var(--glass-bg)',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        border: '1px solid var(--glass-border)',
                    }}>
                        {date}
                    </span>
                </div>

                {/* Company */}
                <p style={{
                    color: 'var(--primary-color)',
                    fontSize: '15px',
                    marginBottom: '16px',
                    fontWeight: 500,
                }}>
                    {company}
                </p>

                {/* Points */}
                <ul style={{
                    listStyle: 'none',
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                }}>
                    {points.map((point, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + 0.3 + i * 0.1 }}
                            style={{
                                marginBottom: i < points.length - 1 ? '10px' : '0',
                                paddingLeft: '20px',
                                position: 'relative'
                            }}
                        >
                            <span style={{
                                position: 'absolute',
                                left: 0,
                                color: 'var(--primary-color)',
                                fontWeight: 600,
                            }}>•</span>
                            {point}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
}
