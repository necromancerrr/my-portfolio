"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { FeaturedProject } from '@/data/portfolio';
import { useVideoCard } from './VideoCard';
import styles from './Work.module.css';

type Video = NonNullable<FeaturedProject['video']>;

// Poster + play button. The <video> (and its download) only exists after a click,
// at which point the surrounding card widens to full width.
export default function DemoVideo({ video }: { video: Video }) {
    const { playing, setPlaying } = useVideoCard();
    const videoRef = useRef<HTMLVideoElement>(null);
    const wrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!playing) return;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        wrapRef.current?.closest('article')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        videoRef.current?.focus({ preventScroll: true });
    }, [playing]);

    return (
        <div
            ref={wrapRef}
            className={styles.video}
            style={playing ? { aspectRatio: `${video.width} / ${video.height}` } : undefined}
        >
            {playing ? (
                <>
                    <motion.video
                        ref={videoRef}
                        controls
                        autoPlay
                        muted
                        playsInline
                        poster={video.poster}
                        width={video.width}
                        height={video.height}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <source src={video.webm} type="video/webm" />
                        <source src={video.mp4} type="video/mp4" />
                    </motion.video>
                    <button
                        type="button"
                        className={`nb-btn nb-btn--sm ${styles.close}`}
                        onClick={() => setPlaying(false)}
                        aria-label="Close video"
                    >
                        Close <span aria-hidden="true">✕</span>
                    </button>
                </>
            ) : (
                <button type="button" className={styles.poster} onClick={() => setPlaying(true)} aria-label={video.label}>
                    <Image src={video.poster} alt="" width={video.width} height={video.height} sizes="(max-width: 900px) 100vw, 640px" />
                    <span className={styles.play} aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="30" height="30">
                            <path d="M8 5.5v13l10.5-6.5L8 5.5Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                    </span>
                    <span className={`mono ${styles.playLabel}`} aria-hidden="true">Watch demo · 1:00</span>
                </button>
            )}
        </div>
    );
}
