import type { CSSProperties } from 'react';

// Monochrome icon from /public/icons, painted with the current text color.
export default function Icon({ name, size }: { name: string; size?: number }) {
    const style = {
        '--icon': `url(/icons/${name}.svg)`,
        ...(size ? { fontSize: size } : {}),
    } as CSSProperties;
    return <span className="icon" style={style} aria-hidden="true" />;
}
