import React from 'react';

interface TerminalBlockProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function TerminalBlock({ title, children, className = '', id }: TerminalBlockProps) {
    return (
        <section id={id} className={`mb-12 relative group ${className}`}>
            {/* Top Border with Title */}
            <div className="flex items-center mb-4 text-[var(--secondary-color)]">
                <span className="mr-2 text-xl font-bold">:::]</span>
                <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-[var(--primary-color)] group-hover:text-[var(--text-color)] transition-colors">
                    {title}
                </h2>
                <span className="ml-2 flex-grow border-b border-dashed border-[var(--secondary-color)] opacity-50"></span>
                <span className="ml-2 text-xl font-bold">[:</span>
            </div>

            {/* Content */}
            <div className="pl-4 md:pl-8 border-l border-dashed border-[var(--secondary-color)] border-opacity-30 hover:border-opacity-100 transition-all duration-500">
                {children}
            </div>

            {/* Bottom Corner Accent */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[var(--primary-color)] opacity-50"></div>
        </section>
    );
}
