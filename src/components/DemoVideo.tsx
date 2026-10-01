"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { FeaturedProject } from '@/data/portfolio';
import styles from './Work.module.css';

type Video = NonNullable<FeaturedProject['video']>;

// Poster + play button. The <video> (and its download) only exists after a click.
export default function DemoVideo({ video }: { video: Video }) {
    const [playing, setPlaying] = useState(false);
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (playing) ref.current?.focus();
    }, [playing]);

    return (
        <div className={styles.video} style={{ aspectRatio: `${video.width} / ${video.height}` }}>
            {playing ? (
                <video
                    ref={ref}
                    controls
                    autoPlay
                    muted
                    playsInline
                    poster={video.poster}
                    width={video.width}
                    height={video.height}
                >
                    <source src={video.webm} type="video/webm" />
                    <source src={video.mp4} type="video/mp4" />
                </video>
            ) : (
                <button type="button" className={styles.poster} onClick={() => setPlaying(true)} aria-label={video.label}>
                    <Image src={video.poster} alt="" width={video.width} height={video.height} sizes="(max-width: 1120px) 100vw, 1100px" />
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
