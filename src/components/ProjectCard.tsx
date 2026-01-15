interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    date: string;
}

export default function ProjectCard({ title, description, tags, link, date }: ProjectCardProps) {
    return (
        <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Project image placeholder with gradient */}
            <div style={{
                height: '140px',
                background: 'linear-gradient(135deg, rgba(0, 195, 255, 0.1), rgba(0, 102, 255, 0.05))',
                borderRadius: '12px',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '1px solid var(--glass-border)',
                position: 'relative',
            }}>
                {/* ASCII decoration */}
                <pre className="ascii-art" style={{ fontSize: '10px', opacity: 0.4 }}>
                    {`┌───────────┐
│  { CODE } │
└───────────┘`}
                </pre>
                {/* Shimmer effect */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    animation: 'shimmer 2s infinite',
                }} />
            </div>

            {/* Date tag */}
            <div style={{ marginBottom: '12px' }}>
                <span className="tag">{date}</span>
            </div>

            {/* Title */}
            <h3 style={{ fontSize: '18px', marginBottom: '8px', fontWeight: 600 }}>
                {title}
            </h3>

            {/* Description */}
            <p style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                marginBottom: '16px',
                flex: 1,
                lineHeight: 1.6,
            }}>
                {description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {tags.map((tag) => (
                    <span key={tag} className="tag" style={{
                        background: 'transparent',
                        borderColor: 'var(--primary-color)',
                        color: 'var(--primary-color)',
                        fontSize: '11px',
                    }}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
