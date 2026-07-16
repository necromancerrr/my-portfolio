// Shared 5x7 pixel-block letter renderer used by the hero name and nav logo.
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

interface PixelLetterProps {
    letter: string;
    color: string;
    size?: string;
    gap?: string;
    radius?: string;
}

export default function PixelLetter({
    letter,
    color,
    size = 'clamp(4px, 1.6vw, 16px)',
    gap = 'clamp(1px, 0.25vw, 3px)',
    radius = '1px',
}: PixelLetterProps) {
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
                        borderRadius: radius,
                    }}
                />
            ))}
        </div>
    );
}
