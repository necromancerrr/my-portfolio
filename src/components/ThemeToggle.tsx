"use client";

import { useSyncExternalStore, type MouseEvent } from 'react';
import { flushSync } from 'react-dom';
import styles from './Nav.module.css';

type Theme = 'light' | 'dark';

// The bootstrap script in layout.tsx sets data-theme before paint; this reads it.
function subscribe(onChange: () => void) {
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
}

const getTheme = (): Theme =>
    document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

function setTheme(theme: Theme) {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
    try {
        localStorage.setItem('theme', theme);
    } catch {
        // Storage can be unavailable (private mode); the switch still works for this visit.
    }
}

export default function ThemeToggle() {
    const theme = useSyncExternalStore(subscribe, getTheme, () => null);
    const isDark = theme === 'dark';

    const toggle = (e: MouseEvent<HTMLButtonElement>) => {
        const next: Theme = getTheme() === 'dark' ? 'light' : 'dark';
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!document.startViewTransition || reduceMotion) {
            setTheme(next);
            return;
        }

        // Reveal the new theme in a circle growing out of the switch.
        const rect = e.currentTarget.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

        const transition = document.startViewTransition(() => flushSync(() => setTheme(next)));
        transition.ready.then(() => {
            document.documentElement.animate(
                { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
                { duration: 550, easing: 'cubic-bezier(0.65, 0, 0.35, 1)', pseudoElement: '::view-transition-new(root)' },
            );
        });
    };

    return (
        <button
            type="button"
            role="switch"
            aria-checked={theme === null ? undefined : isDark}
            aria-label="Dark mode"
            className={styles.toggle}
            onClick={toggle}
        >
            <span className={styles.knob} aria-hidden="true">
                <svg className={styles.sun} viewBox="0 0 24 24" width="14" height="14">
                    <circle cx="12" cy="12" r="5" fill="currentColor" />
                    <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 1.5v2.5M12 20v2.5M1.5 12H4M20 12h2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
                    </g>
                </svg>
                <svg className={styles.moon} viewBox="0 0 24 24" width="14" height="14">
                    <path fill="currentColor" d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1Z" />
                </svg>
            </span>
        </button>
    );
}
