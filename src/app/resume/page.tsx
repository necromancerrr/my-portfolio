"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ResumePage() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/RESUME.pdf';
        link.download = 'Yitbarek_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div style={{
            minHeight: '100vh',
            padding: '100px 24px 60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {/* Navigation back */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    width: '100%',
                    maxWidth: '900px',
                    marginBottom: '32px',
                }}
            >
                <Link
                    href="/"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '14px',
                        transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                >
                    ← back to portfolio
                </Link>
            </motion.div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                    textAlign: 'center',
                    marginBottom: '40px',
                }}
            >
                <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: 700,
                    marginBottom: '16px',
                }}>
                    My Resume
                </h1>
                <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '16px',
                    fontFamily: 'JetBrains Mono, monospace',
                }}>
                    // view and download my latest resume
                </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    display: 'flex',
                    gap: '16px',
                    marginBottom: '32px',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                <motion.button
                    onClick={handleDownload}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '14px 28px',
                        background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: 600,
                        fontFamily: 'JetBrains Mono, monospace',
                        cursor: 'pointer',
                        boxShadow: '0 8px 24px rgba(60, 137, 231, 0.35)',
                    }}
                >
                    <span style={{ fontSize: '18px' }}>↓</span>
                    Download PDF
                </motion.button>

                <motion.a
                    href="/RESUME.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '14px 28px',
                        background: 'var(--glass-bg)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        color: 'var(--text-color)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: 600,
                        fontFamily: 'JetBrains Mono, monospace',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        boxShadow: 'var(--glass-inner-border)',
                    }}
                >
                    <span style={{ fontSize: '16px' }}>↗</span>
                    Open in New Tab
                </motion.a>
            </motion.div>

            {/* PDF Viewer Container */}
            <motion.div
                initial={{ opacity: 0, y: 40, rotate: -1 }}
                animate={{
                    opacity: 1,
                    y: [0, -6, 0],
                    rotate: [-1, 0, -1],
                }}
                transition={{
                    opacity: { duration: 0.8, delay: 0.3 },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    rotate: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
                }}
                whileHover={{ scale: 1.01, rotate: 0 }}
                style={{
                    width: '100%',
                    maxWidth: '900px',
                    background: 'var(--card-bg)',
                    backdropFilter: 'blur(24px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--glass-shadow), var(--glass-inner-border)',
                }}
            >
                {/* IDE-style Header */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '14px 20px',
                    gap: '10px',
                    borderBottom: '1px solid var(--glass-border)',
                    background: 'var(--glass-bg)',
                }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
                    <span style={{
                        marginLeft: '12px',
                        fontSize: '13px',
                        color: 'var(--text-muted)',
                        fontFamily: 'JetBrains Mono, monospace',
                    }}>
                        RESUME.pdf
                    </span>
                    <span style={{
                        marginLeft: 'auto',
                        fontSize: '11px',
                        color: 'var(--primary-color)',
                        fontFamily: 'JetBrains Mono, monospace',
                    }}>
                        ● latest version
                    </span>
                </div>

                {/* PDF Embed */}
                <div style={{
                    width: '100%',
                    height: '80vh',
                    maxHeight: '1100px',
                    minHeight: '600px',
                }}>
                    <iframe
                        src="/RESUME.pdf#toolbar=0&navpanes=0&scrollbar=1"
                        style={{
                            width: '100%',
                            height: '100%',
                            border: 'none',
                        }}
                        title="Resume PDF Viewer"
                    />
                </div>

                {/* Status Bar */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px 20px',
                    gap: '20px',
                    borderTop: '1px solid var(--glass-border)',
                    background: 'var(--glass-bg)',
                    fontSize: '11px',
                    fontFamily: 'JetBrains Mono, monospace',
                    color: 'var(--text-muted)',
                }}>
                    <span style={{ color: '#22c55e' }}>● PDF</span>
                    <span>1 Page</span>
                    <span style={{ marginLeft: 'auto' }}>Yitbarek Wendimu</span>
                </div>
            </motion.div>

            {/* Footer note */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1 }}
                style={{
                    marginTop: '40px',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    fontFamily: 'JetBrains Mono, monospace',
                    textAlign: 'center',
                }}
            >
                Last updated: January 2025
            </motion.p>
        </div>
    );
}
