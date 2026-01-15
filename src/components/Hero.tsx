"use client";

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '100px 200px 60px',
            textAlign: 'center',
        }}>
            {/* Pixel Art Name - CodeVault Style */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                    marginBottom: '40px',
                    overflow: 'hidden',
                    width: '100%',
                    maxWidth: '1200px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0',
                }}
            >
                {/* Each letter rendered as pixel blocks */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'clamp(8px, 2vw, 24px)', flexWrap: 'wrap', justifyContent: 'center' }}>
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

            {/* Centered Hero Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                    width: '100%',
                    maxWidth: '320px',
                    aspectRatio: '3/4',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    marginTop: '20px',
                }}
            >
                {/* Placeholder Image */}
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(180deg, #ff6b6b 0%, #ee5a5a 50%, #cc4444 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    position: 'relative',
                }}>
                    {/* Stylized silhouette */}
                    <div style={{
                        width: '70%',
                        height: '75%',
                        background: 'linear-gradient(180deg, #3d3d3d 0%, #1a1a1a 100%)',
                        borderRadius: '50% 50% 0 0',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <div style={{
                            width: '55%',
                            height: '22%',
                            background: 'linear-gradient(180deg, #e8b89d 0%, #d4a088 100%)',
                            borderRadius: '50%',
                            marginTop: '12%',
                        }} />
                        <div style={{
                            width: '65%',
                            height: '6%',
                            background: 'linear-gradient(90deg, transparent 5%, rgba(0,195,255,0.9) 25%, rgba(0,195,255,0.9) 75%, transparent 95%)',
                            marginTop: '-3%',
                            borderRadius: '4px',
                            boxShadow: '0 0 20px rgba(0,195,255,0.5)',
                        }} />
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: '12%',
                        width: '40%',
                        height: '12%',
                        background: 'linear-gradient(180deg, #ff4444 0%, #cc3333 100%)',
                        borderRadius: '50% 50% 10% 10%',
                    }} />
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'white',
                    fontSize: '11px',
                    opacity: 0.6,
                    whiteSpace: 'nowrap',
                }} className="mono">
                    [ YOUR PHOTO HERE ]
                </div>
            </motion.div>

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
    const size = 'clamp(8px, 1.5vw, 14px)';
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
