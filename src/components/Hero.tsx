"use client";

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '100px 24px 60px',
            textAlign: 'center',
        }}>
            {/* Pixel Art Name - CodeVault Style */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                    marginTop: '40px',
                    marginBottom: '60px',
                    overflow: 'hidden',
                    width: '100%',
                    maxWidth: '1000px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0',
                }}
            >
                {/* Each letter rendered as pixel blocks */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(4px, 1.5vw, 24px)', flexWrap: 'nowrap', justifyContent: 'center' }}>
                    {/* Y - Black */}
                    <PixelLetter letter="Y" color="var(--text-color)" />
                    {/* i - Black */}
                    <PixelLetter letter="i" color="var(--text-color)" />
                    {/* t - Black */}
                    <PixelLetter letter="t" color="var(--text-color)" />
                    {/* b - Black */}
                    <PixelLetter letter="b" color="var(--text-color)" />
                    {/* a - Blue */}
                    <PixelLetter letter="a" color="var(--primary-color)" />
                    {/* r - Blue */}
                    <PixelLetter letter="r" color="var(--primary-color)" />
                    {/* e - Blue */}
                    <PixelLetter letter="e" color="var(--primary-color)" />
                    {/* k - Blue */}
                    <PixelLetter letter="k" color="var(--primary-color)" />
                </div>
            </motion.div>

            {/* Hero Image with Floating Glass Elements */}
            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '700px',
                marginTop: '50px',
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
                        y: [0, -12, 0],
                        rotate: [-3, -1, -3],
                    }}
                    transition={{
                        opacity: { duration: 0.8, delay: 0.5 },
                        x: { duration: 0.8, delay: 0.5 },
                        y: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        },
                        rotate: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
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
                        <span style={{ fontSize: '11px', color: '#ff6b6b', fontFamily: 'JetBrains Mono, monospace' }}>&lt;portfolio.tsx&gt;</span>
                        <div style={{ display: 'flex', gap: '6px' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f57' }} />
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#febc2e' }} />
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#28c840' }} />
                        </div>
                    </div>
                    {/* Code Content */}
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', lineHeight: 1.7 }}>
                        <div><span style={{ color: '#e879f9' }}>import</span> <span style={{ color: '#60a5fa' }}>React</span> <span style={{ color: '#e879f9' }}>from</span> <span style={{ color: '#22c55e' }}>'react'</span></div>
                        <div><span style={{ color: '#e879f9' }}>import</span> <span style={{ color: '#60a5fa' }}>{'{ motion }'}</span> <span style={{ color: '#e879f9' }}>from</span> <span style={{ color: '#22c55e' }}>'framer'</span></div>
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
                        y: [0, -8, 0],
                        rotate: [2, 4, 2],
                        scale: [1, 1.02, 1],
                    }}
                    transition={{
                        opacity: { duration: 0.8, delay: 0.6 },
                        x: { duration: 0.8, delay: 0.6 },
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.8
                        },
                        rotate: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.8
                        },
                        scale: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.8
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

                {/* Floating Robotic Arm Panel - Bottom Right */}
                <motion.div
                    className="floating-ui-element"
                    initial={{ opacity: 0, x: 80, y: 40 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: [0, -15, 0],
                        rotate: [2, -1, 2],
                    }}
                    transition={{
                        opacity: { duration: 0.8, delay: 0.7 },
                        x: { duration: 0.8, delay: 0.7 },
                        y: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        },
                        rotate: {
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }
                    }}
                    whileHover={{
                        scale: 1.08,
                        rotate: 0,
                        transition: { duration: 0.3 }
                    }}
                    style={{
                        position: 'absolute',
                        right: '-8%',
                        bottom: '20%',
                        background: 'var(--card-bg)',
                        backdropFilter: 'blur(24px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                        borderRadius: '20px',
                        padding: '14px 18px',
                        boxShadow: 'var(--glass-shadow), var(--glass-inner-border)',
                        border: '1px solid var(--glass-border)',
                        zIndex: 10,
                        cursor: 'pointer',
                    }}
                >
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span style={{ fontSize: '10px', color: '#22c55e', fontFamily: 'JetBrains Mono, monospace' }}>● READY</span>
                        <span style={{ fontSize: '9px', color: '#9ca3af', fontFamily: 'JetBrains Mono, monospace' }}>ARM-01</span>
                    </div>
                    {/* Robotic Arm Illustration */}
                    <div style={{ position: 'relative', width: '120px', height: '90px' }}>
                        {/* Base */}
                        <div style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '40px',
                            height: '12px',
                            background: 'linear-gradient(180deg, #e5e7eb 0%, #9ca3af 100%)',
                            borderRadius: '4px 4px 6px 6px',
                        }} />
                        {/* Base cylinder */}
                        <div style={{
                            position: 'absolute',
                            bottom: '10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '28px',
                            height: '20px',
                            background: 'linear-gradient(90deg, #d1d5db 0%, #f3f4f6 50%, #d1d5db 100%)',
                            borderRadius: '4px',
                        }} />
                        {/* Lower arm segment */}
                        <div style={{
                            position: 'absolute',
                            bottom: '28px',
                            left: '50%',
                            transform: 'translateX(-50%) rotate(-30deg)',
                            transformOrigin: 'bottom center',
                            width: '14px',
                            height: '35px',
                            background: 'linear-gradient(90deg, #9ca3af 0%, #e5e7eb 40%, #f3f4f6 60%, #d1d5db 100%)',
                            borderRadius: '6px',
                        }}>
                            {/* Joint circle */}
                            <div style={{
                                position: 'absolute',
                                top: '-4px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '12px',
                                height: '12px',
                                background: 'linear-gradient(135deg, #f3f4f6 0%, #9ca3af 100%)',
                                borderRadius: '50%',
                                border: '2px solid #22c55e',
                            }} />
                        </div>
                        {/* Upper arm segment */}
                        <div style={{
                            position: 'absolute',
                            bottom: '52px',
                            left: '32%',
                            transform: 'rotate(-70deg)',
                            transformOrigin: 'bottom right',
                            width: '12px',
                            height: '32px',
                            background: 'linear-gradient(90deg, #9ca3af 0%, #e5e7eb 40%, #f3f4f6 60%, #d1d5db 100%)',
                            borderRadius: '5px',
                        }}>
                            {/* Joint circle */}
                            <div style={{
                                position: 'absolute',
                                top: '-4px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '10px',
                                height: '10px',
                                background: 'linear-gradient(135deg, #f3f4f6 0%, #9ca3af 100%)',
                                borderRadius: '50%',
                                border: '2px solid #22c55e',
                            }} />
                        </div>
                        {/* Gripper/Claw */}
                        <div style={{
                            position: 'absolute',
                            top: '8px',
                            left: '8px',
                            width: '20px',
                            height: '16px',
                        }}>
                            {/* Claw fingers */}
                            <div style={{
                                position: 'absolute',
                                top: '0',
                                left: '2px',
                                width: '4px',
                                height: '12px',
                                background: '#22c55e',
                                borderRadius: '2px',
                                transform: 'rotate(-15deg)',
                            }} />
                            <div style={{
                                position: 'absolute',
                                top: '0',
                                right: '2px',
                                width: '4px',
                                height: '12px',
                                background: '#22c55e',
                                borderRadius: '2px',
                                transform: 'rotate(15deg)',
                            }} />
                        </div>
                    </div>
                    {/* Status indicators */}
                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px', justifyContent: 'center' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#60a5fa' }} />
                    </div>
                </motion.div>

                {/* Main Hero Image with Floating Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -10, 0],
                    }}
                    transition={{
                        opacity: { duration: 0.8, delay: 0.2 },
                        scale: { duration: 0.8, delay: 0.2 },
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }
                    }}
                    style={{
                        width: '100%',
                        maxWidth: '450px',
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

// Pixel letter component - renders each letter as a grid of blocks
function PixelLetter({ letter, color }: { letter: string; color: string }) {
    const size = 'clamp(8px, 1.6vw, 16px)';
    const gap = 'clamp(2px, 0.25vw, 3px)';

    // Define pixel patterns for each letter (5 wide x 7 tall grid)
    const patterns: Record<string, number[][]> = {
        'Y': [
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ],
        'i': [
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ],
        't': [
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 1, 1],
        ],
        'b': [
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 0],
        ],
        'a': [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 1],
            [0, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 1],
        ],
        'r': [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
        ],
        'e': [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0],
            [0, 1, 1, 1, 1],
        ],
        'k': [
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0],
            [1, 1, 0, 0, 0],
            [1, 0, 1, 0, 0],
            [1, 0, 0, 1, 0],
        ],
    };

    const pattern = patterns[letter] || patterns['a'];

    return (
        <div style={{
            display: 'grid',
            gridTemplateRows: `repeat(7, ${size})`,
            gridTemplateColumns: `repeat(5, ${size})`,
            gap: gap,
        }}>
            {pattern.flat().map((filled, i) => (
                <div
                    key={i}
                    style={{
                        width: size,
                        height: size,
                        backgroundColor: filled ? color : 'transparent',
                        borderRadius: '1px',
                    }}
                />
            ))}
        </div>
    );
}
