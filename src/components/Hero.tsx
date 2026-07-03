"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import GradientBlobs from './GradientBlobs';
import PixelLetter from './PixelLetter';

export default function Hero() {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '100px 24px 60px',
            textAlign: 'center',
            position: 'relative',
        }}>
            <GradientBlobs variant="hero" />

            {/* Real heading for screen readers and search engines */}
            <h1 className="sr-only">Yitbarek Ejigu — Software Engineer</h1>

            {/* Pixel Art Name - blocks assemble letter by letter on load */}
            <div
                style={{
                    marginTop: '40px',
                    marginBottom: '32px',
                    overflow: 'hidden',
                    width: '100%',
                    maxWidth: '1000px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0',
                }}
            >
                <div aria-hidden="true" style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(4px, 1.5vw, 24px)', flexWrap: 'nowrap', justifyContent: 'center' }}>
                    {(['Y', 'i', 't', 'b', 'a', 'r', 'e', 'k'] as const).map((letter, idx) => (
                        <PixelLetter
                            key={idx}
                            letter={letter}
                            color={idx < 4 ? 'var(--text-color)' : 'var(--primary-color)'}
                            animateIn
                            delay={idx * 0.08}
                        />
                    ))}
                </div>
            </div>

            {/* Tagline */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mono"
                style={{
                    fontSize: 'clamp(13px, 2.5vw, 16px)',
                    color: 'var(--text-muted)',
                    maxWidth: '640px',
                    lineHeight: 1.7,
                    marginBottom: '28px',
                }}
            >
                CS @ University of Washington &apos;27
            </motion.p>

            {/* Call-to-action buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.85 }}
                style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
            >
                <a href="#projects" className="btn btn-primary">
                    View Projects
                </a>
                <Link href="/resume" className="btn btn-outline">
                    Resume
                </Link>
            </motion.div>

            {/* Hero Image with Floating Glass Elements */}
            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '700px',
                marginTop: '24px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {/* Abstract Gradient Blobs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '5%',
                        width: '180px',
                        height: '180px',
                        background: 'linear-gradient(135deg, rgba(147, 112, 219, 0.6) 0%, rgba(79, 70, 229, 0.4) 100%)',
                        borderRadius: '50%',
                        filter: 'blur(40px)',
                        zIndex: 0,
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{
                        position: 'absolute',
                        bottom: '20%',
                        right: '0%',
                        width: '150px',
                        height: '150px',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.5) 0%, rgba(147, 197, 253, 0.3) 100%)',
                        borderRadius: '50%',
                        filter: 'blur(35px)',
                        zIndex: 0,
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    style={{
                        position: 'absolute',
                        top: '60%',
                        left: '-5%',
                        width: '120px',
                        height: '120px',
                        background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.4) 0%, rgba(251, 191, 36, 0.3) 100%)',
                        borderRadius: '50%',
                        filter: 'blur(30px)',
                        zIndex: 0,
                    }}
                />

                {/* Floating Code Editor - Left Side */}
                <motion.div
                    className="floating-ui-element"
                    initial={{ opacity: 0, x: -80, y: 40 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        rotate: -2,
                        y: [0, -6, 0],
                    }}
                    transition={{
                        opacity: { duration: 0.8, delay: 0.5 },
                        x: { duration: 0.8, delay: 0.5 },
                        rotate: { duration: 0.8, delay: 0.5 },
                        y: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.3
                        }
                    }}
                    whileHover={{
                        scale: 1.05,
                        rotate: 0,
                        transition: { duration: 0.3 }
                    }}
                    style={{
                        position: 'absolute',
                        left: '-15%',
                        top: '10%',
                        background: 'var(--card-bg)',
                        backdropFilter: 'blur(24px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                        borderRadius: '20px',
                        padding: '16px 20px',
                        boxShadow: 'var(--glass-shadow), var(--glass-inner-border)',
                        border: '1px solid var(--glass-border)',
                        zIndex: 10,
                        minWidth: '280px',
                        cursor: 'pointer',
                    }}
                >
                    {/* Window Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <span style={{ fontSize: '11px', color: '#ff6b6b', fontFamily: 'var(--font-mono), monospace' }}>&lt;portfolio.tsx&gt;</span>
                        <div style={{ display: 'flex', gap: '6px' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f57' }} />
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#febc2e' }} />
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28c840' }} />
                        </div>
                    </div>
                    {/* Code Content */}
                    <div style={{ fontFamily: 'var(--font-mono), monospace', fontSize: '11px', lineHeight: 1.7 }}>
                        <div><span style={{ color: '#e879f9' }}>import</span> <span style={{ color: '#60a5fa' }}>React</span> <span style={{ color: '#e879f9' }}>from</span> <span style={{ color: '#22c55e' }}>{"'react'"}</span></div>
                        <div><span style={{ color: '#e879f9' }}>import</span> <span style={{ color: '#60a5fa' }}>{'{ motion }'}</span> <span style={{ color: '#e879f9' }}>from</span> <span style={{ color: '#22c55e' }}>{"'framer'"}</span></div>
                        <div style={{ height: '8px' }} />
                        <div><span style={{ color: '#e879f9' }}>const</span> <span style={{ color: '#fb923c' }}>App</span> <span style={{ color: '#94a3b8' }}>=</span> <span style={{ color: '#94a3b8' }}>{'() =>'}</span> <span style={{ color: '#94a3b8' }}>{'{'}</span></div>
                        <div style={{ paddingLeft: '16px' }}><span style={{ color: '#e879f9' }}>return</span> <span style={{ color: '#94a3b8' }}>(</span></div>
                        <div style={{ paddingLeft: '24px' }}><span style={{ color: '#a78bfa' }}>&lt;Hero</span> <span style={{ color: '#60a5fa' }}>animate</span><span style={{ color: '#94a3b8' }}>=</span><span style={{ color: '#22c55e' }}>true</span> <span style={{ color: '#a78bfa' }}>/&gt;</span> <span style={{ color: '#22c55e' }}>●</span></div>
                        <div style={{ paddingLeft: '16px' }}><span style={{ color: '#94a3b8' }}>)</span></div>
                        <div><span style={{ color: '#94a3b8' }}>{'}'}</span> <span style={{ color: '#22c55e' }}>●</span></div>
                    </div>
                    {/* Sidebar icons */}
                    <div style={{
                        position: 'absolute',
                        left: '-44px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        background: 'var(--card-bg)',
                        backdropFilter: 'blur(16px)',
                        WebkitBackdropFilter: 'blur(16px)',
                        padding: '10px',
                        borderRadius: '14px',
                        boxShadow: 'var(--glass-shadow), var(--glass-inner-border)',
                        border: '1px solid var(--glass-border)',
                    }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '11px' }}>◫</div>
                        <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: 'var(--text-muted)' }}>✎</div>
                        <div style={{ width: '26px', height: '26px', borderRadius: '6px', background: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: 'var(--text-muted)' }}>◎</div>
                    </div>
                </motion.div>

                {/* Floating Toolbar - Top Right */}
                <motion.div
                    className="floating-ui-element"
                    initial={{ opacity: 0, x: 80, y: -40 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        rotate: 2,
                        y: [0, -5, 0],
                    }}
                    transition={{
                        opacity: { duration: 0.8, delay: 0.6 },
                        x: { duration: 0.8, delay: 0.6 },
                        rotate: { duration: 0.8, delay: 0.6 },
                        y: {
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.4
                        }
                    }}
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        transition: { duration: 0.3 }
                    }}
                    style={{
                        position: 'absolute',
                        right: '-5%',
                        top: '5%',
                        background: 'var(--card-bg)',
                        backdropFilter: 'blur(24px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                        borderRadius: '16px',
                        padding: '10px 14px',
                        boxShadow: 'var(--glass-shadow), var(--glass-inner-border)',
                        border: '1px solid var(--glass-border)',
                        zIndex: 10,
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                        cursor: 'pointer',
                    }}
                >
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '12px' }}>▶</div>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: 'var(--text-muted)' }}>⟳</div>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: 'var(--text-muted)' }}>⊕</div>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: 'var(--text-muted)' }}>⋯</div>
                    <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', color: 'var(--text-muted)' }}>+</div>
                </motion.div>

                {/* Main Hero Image with Floating Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -6, 0],
                    }}
                    transition={{
                        opacity: { duration: 0.8, delay: 0.2 },
                        scale: { duration: 0.8, delay: 0.2 },
                        y: {
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.5
                        }
                    }}
                    style={{
                        width: '100%',
                        maxWidth: '540px',
                        borderRadius: '24px',
                        overflow: 'visible',
                        position: 'relative',
                        zIndex: 5,
                    }}
                >
                    {/* Glow effect behind image */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        height: '80%',
                        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                        zIndex: -1,
                    }} />
                    <motion.img
                        src="/profile.svg"
                        alt="Yitbarek"
                        initial={{ filter: 'drop-shadow(0 0 0 transparent)' }}
                        animate={{
                            filter: [
                                'drop-shadow(0 10px 30px rgba(102, 126, 234, 0.3))',
                                'drop-shadow(0 20px 40px rgba(102, 126, 234, 0.4))',
                                'drop-shadow(0 10px 30px rgba(102, 126, 234, 0.3))',
                            ]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                        }}
                    />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 1, duration: 0.5 }}
                style={{
                    marginTop: 'auto',
                    paddingTop: '60px',
                }}
                className="mono"
            >
                ↓ scroll
            </motion.div>
        </section>
    );
}
