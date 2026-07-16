"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import PixelLetter from './PixelLetter';

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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
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
            <nav
                className="nav-pill"
                style={{
                    boxShadow: scrolled
                        ? '0 8px 32px rgba(0, 195, 255, 0.15)'
                        : '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                }}>
                    <Link href="/" className="nav-logo">
                        {/* Mini Pixel Logo - just "Yit" */}
                        <PixelLetter letter="Y" color="var(--text-color)" size="3px" gap="1px" radius="0.5px" />
                        <PixelLetter letter="i" color="var(--text-color)" size="3px" gap="1px" radius="0.5px" />
                        <PixelLetter letter="t" color="var(--primary-color)" size="3px" gap="1px" radius="0.5px" />
                    </Link>

                    {/* Desktop nav items */}
                    <div className="nav-desktop">
                        {navItems.map((item) => (
                            <a key={item.name} href={item.path} className="nav-link">
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <button onClick={toggleTheme} className="theme-toggle">
                        ◐
                    </button>

                    {/* Mobile hamburger menu button */}
                    <button
                        className="nav-mobile-toggle"
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
                </div>
            </nav>

            {/* Mobile dropdown menu */}
            <div
                className="nav-mobile-menu"
                style={{
                    padding: mobileMenuOpen ? '16px 24px' : '0 24px',
                    border: mobileMenuOpen ? '1px solid var(--glass-border)' : 'none',
                    boxShadow: mobileMenuOpen ? '0 8px 32px rgba(0, 0, 0, 0.15)' : 'none',
                    maxHeight: mobileMenuOpen ? '300px' : '0',
                    opacity: mobileMenuOpen ? 1 : 0,
                }}
            >
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.path}
                        onClick={handleNavClick}
                        className="nav-link"
                        style={{ padding: '12px 16px', textAlign: 'center' }}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </>
    );
}
