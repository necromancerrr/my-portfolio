"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/lib/site';
import ThemeToggle from './ThemeToggle';
import styles from './Nav.module.css';

const links = [
    { id: 'work', label: 'Work', href: '/#work' },
    { id: 'experience', label: 'Experience', href: '/#experience' },
    { id: 'about', label: 'About', href: '/#about' },
    { id: 'contact', label: 'Contact', href: '/#contact' },
    { id: 'resume', label: 'Resume', href: '/resume' },
];

export default function Nav() {
    const pathname = usePathname();
    const [section, setSection] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);
    const active = pathname === '/resume' ? 'resume' : section;

    // Highlight the section currently in the middle of the viewport.
    useEffect(() => {
        if (pathname !== '/') return;
        const targets = links
            .map((l) => document.getElementById(l.id))
            .filter((el): el is HTMLElement => el !== null);
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setSection(entry.target.id);
                }
            },
            { rootMargin: '-45% 0px -50% 0px' },
        );
        targets.forEach((el) => observer.observe(el));
        const onTop = () => {
            if (window.scrollY < 200) setSection(null);
        };
        window.addEventListener('scroll', onTop, { passive: true });
        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', onTop);
        };
    }, [pathname]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        const onPointer = (e: PointerEvent) => {
            if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
        };
        window.addEventListener('keydown', onKey);
        document.addEventListener('pointerdown', onPointer);
        return () => {
            window.removeEventListener('keydown', onKey);
            document.removeEventListener('pointerdown', onPointer);
        };
    }, [open]);

    const renderLink = (link: (typeof links)[number], mobile = false) => {
        const isActive = active === link.id;
        const props = {
            className: mobile ? styles.mobileLink : styles.link,
            'aria-current': isActive ? ('page' as const) : undefined,
            onClick: () => setOpen(false),
        };
        const content = (
            <>
                {isActive && !mobile && (
                    <motion.span
                        layoutId="nav-active"
                        className={styles.activePill}
                        transition={{ type: 'spring', stiffness: 520, damping: 34 }}
                    />
                )}
                <span className={styles.linkText}>{link.label}</span>
            </>
        );
        return link.href.startsWith('/#') ? (
            <a key={link.id} href={link.href} {...props}>{content}</a>
        ) : (
            <Link key={link.id} href={link.href} {...props}>{content}</Link>
        );
    };

    return (
        <header ref={headerRef} className={styles.wrap}>
            <nav className={`nb-card ${styles.bar}`} aria-label="Main">
                <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
                    <span className={styles.brandMark} aria-hidden="true" />
                    {site.name}
                </Link>

                <div className={styles.links}>{links.map((l) => renderLink(l))}</div>

                <div className={styles.actions}>
                    <ThemeToggle />
                    <button
                        type="button"
                        className={`nb-btn nb-btn--icon nb-btn--sm ${styles.menuBtn}`}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        onClick={() => setOpen((o) => !o)}
                    >
                        <span className={open ? `${styles.burger} ${styles.burgerOpen}` : styles.burger} aria-hidden="true" />
                    </button>
                </div>
            </nav>

            {open && (
                <motion.div
                    id="mobile-menu"
                    className={`nb-card ${styles.mobileMenu}`}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                    {links.map((l) => renderLink(l, true))}
                </motion.div>
            )}
        </header>
    );
}
