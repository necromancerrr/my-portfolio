"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
    { name: 'About', path: '#about' },
    { name: 'Projects', path: '#projects' },
    { name: 'Experience', path: '#experience' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '#contact' },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const handleNavClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1000,
                padding: isMobile ? '10px 16px' : '12px 24px',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '9999px',
                boxShadow: scrolled
                    ? '0 8px 32px rgba(0, 195, 255, 0.15)'
                    : '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                maxWidth: 'calc(100% - 32px)',
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                }}>
                    <Link href="/" style={{
                        marginRight: isMobile ? '8px' : '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '2px',
                    }}>
                        {/* Mini Pixel Logo - just "Yit" */}
                        <MiniPixelLetter letter="Y" color="var(--text-color)" />
                        <MiniPixelLetter letter="i" color="var(--text-color)" />
                        <MiniPixelLetter letter="t" color="var(--primary-color)" />
                    </Link>

                    {/* Desktop nav items */}
                    {!isMobile && navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.path}
                            style={{
                                fontSize: '14px',
                                fontWeight: 500,
                                padding: '8px 16px',
                                borderRadius: '20px',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(0, 195, 255, 0.1)';
                                e.currentTarget.style.color = 'var(--primary-color)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = 'inherit';
                            }}
                        >
                            {item.name}
                        </a>
                    ))}

                    <button
                        onClick={toggleTheme}
                        style={{
                            marginLeft: isMobile ? '4px' : '8px',
                            padding: '8px 12px',
                            borderRadius: '12px',
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--text-color)',
                            cursor: 'pointer',
                            fontSize: '14px',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--primary-color)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                        }}
                    >
                        ◐
                    </button>

                    {/* Mobile hamburger menu button */}
                    {isMobile && (
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{
                                marginLeft: '4px',
                                padding: '8px 10px',
                                borderRadius: '12px',
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                color: 'var(--text-color)',
                                cursor: 'pointer',
                                fontSize: '16px',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '3px',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <span style={{
                                display: 'block',
                                width: '16px',
                                height: '2px',
                                background: 'var(--text-color)',
                                transition: 'all 0.3s ease',
                                transform: mobileMenuOpen ? 'rotate(45deg) translate(3.5px, 3.5px)' : 'none',
                            }} />
                            <span style={{
                                display: 'block',
                                width: '16px',
                                height: '2px',
                                background: 'var(--text-color)',
                                transition: 'all 0.3s ease',
                                opacity: mobileMenuOpen ? 0 : 1,
                            }} />
                            <span style={{
                                display: 'block',
                                width: '16px',
                                height: '2px',
                                background: 'var(--text-color)',
                                transition: 'all 0.3s ease',
                                transform: mobileMenuOpen ? 'rotate(-45deg) translate(3.5px, -3.5px)' : 'none',
                            }} />
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile dropdown menu */}
            {isMobile && (
                <div style={{
                    position: 'fixed',
                    top: '70px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 999,
                    padding: mobileMenuOpen ? '16px 24px' : '0 24px',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: mobileMenuOpen ? '1px solid var(--glass-border)' : 'none',
                    borderRadius: '20px',
                    boxShadow: mobileMenuOpen ? '0 8px 32px rgba(0, 0, 0, 0.15)' : 'none',
                    transition: 'all 0.3s ease',
                    maxHeight: mobileMenuOpen ? '300px' : '0',
                    overflow: 'hidden',
                    opacity: mobileMenuOpen ? 1 : 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    minWidth: '160px',
                }}>
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.path}
                            onClick={handleNavClick}
                            style={{
                                fontSize: '14px',
                                fontWeight: 500,
                                padding: '12px 16px',
                                borderRadius: '12px',
                                transition: 'all 0.2s ease',
                                textAlign: 'center',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(0, 195, 255, 0.1)';
                                e.currentTarget.style.color = 'var(--primary-color)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = 'inherit';
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </>
    );
}

// Mini Pixel letter component for nav logo
function MiniPixelLetter({ letter, color }: { letter: string; color: string }) {
    const size = '3px';
    const gap = '1px';

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
                        borderRadius: '0.5px',
                    }}
                />
            ))}
        </div>
    );
}
