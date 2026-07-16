// Slow-scrolling ticker strip. Pure CSS animation (see .marquee in globals.css),
// so it can render on the server and pauses under prefers-reduced-motion.

interface MarqueeProps {
    items: string[];
}

export default function Marquee({ items }: MarqueeProps) {
    // Track content is duplicated once so the -50% translate loops seamlessly.
    const strip = (key: string) => (
        <div className="marquee-group" aria-hidden={key === 'b' ? true : undefined} key={key}>
            {items.map((item) => (
                <span className="marquee-item" key={`${key}-${item}`}>
                    {item}
                    <span className="marquee-star" aria-hidden="true">✦</span>
                </span>
            ))}
        </div>
    );

    return (
        <div className="marquee" role="marquee" aria-label={items.join(', ')}>
            <div className="marquee-track">
                {strip('a')}
                {strip('b')}
            </div>
        </div>
    );
}
