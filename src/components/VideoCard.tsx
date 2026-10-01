"use client";

import { createContext, useContext, useState, type ReactNode } from 'react';

interface VideoCardState {
    playing: boolean;
    setPlaying: (playing: boolean) => void;
}

const VideoCardContext = createContext<VideoCardState | null>(null);

export function useVideoCard() {
    const ctx = useContext(VideoCardContext);
    if (!ctx) throw new Error('useVideoCard must be used inside <VideoCard>');
    return ctx;
}

interface VideoCardProps {
    id?: string;
    /** Classes for the card at its normal size */
    className: string;
    /** Classes swapped in while the video plays (full width) */
    playingClassName: string;
    children: ReactNode;
}

// A work card that is the same size as its neighbours until the demo plays,
// then widens to full width so the recording is readable.
export default function VideoCard({ id, className, playingClassName, children }: VideoCardProps) {
    const [playing, setPlaying] = useState(false);

    return (
        <VideoCardContext.Provider value={{ playing, setPlaying }}>
            <article id={id} className={playing ? playingClassName : className}>
                {children}
            </article>
        </VideoCardContext.Provider>
    );
}
