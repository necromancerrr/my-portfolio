// Decorative 12-point starburst, a classic neo-brutalist sticker shape.
const POINTS = 12;
const path = Array.from({ length: POINTS * 2 }, (_, i) => {
    const r = i % 2 === 0 ? 56 : 40;
    const a = (Math.PI / POINTS) * i - Math.PI / 2;
    return `${(60 + r * Math.cos(a)).toFixed(2)},${(60 + r * Math.sin(a)).toFixed(2)}`;
}).join(' ');

export default function Star({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 120 120" aria-hidden="true" focusable="false">
            <polygon points={path} fill="var(--sun)" stroke="var(--line)" strokeWidth="3" strokeLinejoin="round" />
        </svg>
    );
}
