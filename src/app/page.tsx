"use client";

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const projects = [
  {
    title: 'LoopIn - University App',
    description: 'Cross-platform MVP for students to create/join study sessions, attend events, and buy/exchange items through a student marketplace.',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    date: 'Jun 2025 - Present',
  },
  {
    title: 'Premier League Match Predictor',
    description: 'ML model achieving ~68% accuracy on match outcomes. Processed 1,100+ matches with Logistic Regression and Random Forest classifiers.',
    tags: ['Python', 'scikit-learn', 'ML'],
    date: 'Jan 2025 - Feb 2025',
  },
  {
    title: 'Real-Time Stock Market App',
    description: 'Full-stack dashboard with live prices, interactive charts, and AI-powered insights using Finnhub API.',
    tags: ['Next.js 14', 'TypeScript', 'Redis'],
    date: 'Sep 2025 - Present',
  },
  {
    title: 'Java Code Coach',
    description: 'Web app that checks Java code against UW CSF style guidelines with live editor and inline feedback system.',
    tags: ['Java', 'Web', 'Education'],
    date: 'May 2025',
  },
];

const skills = [
  { category: 'Languages', items: ['Java', 'Python', 'C/C++', 'TypeScript', 'JavaScript', 'Swift'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'HTML/CSS', 'React Native'] },
  { category: 'Backend', items: ['Firebase', 'Node.js', 'MySQL', 'Redis'] },
  { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Xcode', 'Jupyter'] },
];

const experiences = [
  {
    role: 'Python & Mixed Reality Instructor',
    company: 'AVELA',
    date: 'Sep 2024 - Present',
    points: [
      'Facilitated mixed reality & coding workshops for 40+ high school students',
      'Created and delivered 5+ STEM outreach workshops',
    ],
  },
  {
    role: 'Database Intern',
    company: 'Gold Crest LLC',
    date: 'May 2023 - Sep 2023',
    points: [
      'Managed database for 200+ client records',
      'Identified 40+ data inconsistencies, enhancing record integrity by 35%',
    ],
  },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />

        {/* ASCII Divider */}
        <div className="ascii-divider">
          {'─'.repeat(40)}
        </div>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <AnimatedSection>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                {/* Left - Glass Card with ASCII */}
                <div className="glass-strong" style={{
                  padding: '40px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <pre className="ascii-art" style={{ fontSize: '12px', opacity: 0.7 }}>
                    {`    ╔══════════════════╗
    ║  ┌──┐  ┌──┐     ║
    ║  │○○│  │  │     ║
    ║  └──┘  └──┘     ║
    ║       ──        ║
    ║     ╲____╱      ║
    ╚══════════════════╝`}
                  </pre>
                </div>

                {/* Right - Text */}
                <div>
                  <h2 className="section-title">About Me</h2>
                  <p className="section-subtitle" style={{ marginBottom: '24px' }}>
                    I'm a Computer Science student at the University of Washington with a passion for building
                    impactful software. From mixed reality to machine learning, I love exploring new technologies.
                  </p>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {[
                      { label: 'UW', sub: 'CS Major' },
                      { label: '3.3', sub: 'GPA' },
                      { label: '2027', sub: 'Graduation' },
                    ].map((item) => (
                      <div key={item.label} className="glass" style={{ padding: '16px 24px', flex: 1, minWidth: '100px' }}>
                        <div className="mono" style={{ color: 'var(--primary-color)', fontWeight: 700, fontSize: '20px' }}>{item.label}</div>
                        <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{item.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section">
          <div className="container">
            <AnimatedSection>
              <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
                Technical Skills
              </h2>
            </AnimatedSection>
            <StaggerContainer className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {skills.map((skill) => (
                <StaggerItem key={skill.category}>
                  <div className="card">
                    <h3 style={{ fontSize: '14px', color: 'var(--primary-color)', marginBottom: '16px' }} className="mono">
                      {skill.category}
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {skill.items.map((item) => (
                        <span key={item} className="tag">{item}</span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ASCII Divider */}
        <div className="ascii-divider">
          ┌{'─'.repeat(15)}┐ PROJECTS ┌{'─'.repeat(15)}┐
        </div>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="container">
            <AnimatedSection>
              <h2 className="section-title" style={{ marginBottom: '48px' }}>Featured Projects</h2>
            </AnimatedSection>
            <StaggerContainer className="grid grid-2">
              {projects.map((project) => (
                <StaggerItem key={project.title}>
                  <ProjectCard {...project} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="container">
            <AnimatedSection>
              <h2 className="section-title" style={{ marginBottom: '48px' }}>Experience</h2>
            </AnimatedSection>
            <div style={{ maxWidth: '700px' }}>
              {experiences.map((exp, index) => (
                <AnimatedSection key={exp.role} delay={index * 0.1}>
                  <div className="glass" style={{
                    padding: '24px',
                    marginBottom: index < experiences.length - 1 ? '24px' : '0',
                    position: 'relative',
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '8px' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: 600 }}>{exp.role}</h3>
                      <span className="tag">{exp.date}</span>
                    </div>
                    <p style={{ color: 'var(--primary-color)', fontSize: '14px', marginBottom: '12px' }} className="mono">
                      @ {exp.company}
                    </p>
                    <ul style={{ listStyle: 'none', fontSize: '14px', color: 'var(--text-muted)' }}>
                      {exp.points.map((point) => (
                        <li key={point} style={{ marginBottom: '6px', paddingLeft: '16px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--primary-color)' }}>→</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section" style={{ textAlign: 'center' }}>
          <div className="container">
            <AnimatedSection>
              <div className="glass-strong" style={{ padding: '60px 40px', maxWidth: '600px', margin: '0 auto' }}>
                <h2 className="section-title">Let's Connect</h2>
                <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
                  I'm always open to discussing new projects and opportunities.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="mailto:yejigu@uw.edu" className="btn btn-primary">
                    yejigu@uw.edu
                  </a>
                  <a href="https://linkedin.com/in/yithareek" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    LinkedIn
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    GitHub
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          padding: '32px',
          textAlign: 'center',
          fontSize: '12px',
          color: 'var(--text-muted)',
        }}>
          <pre className="ascii-art" style={{ fontSize: '10px', marginBottom: '16px', opacity: 0.2 }}>
            {'[ :: ] ────────────── [ :: ]'}
          </pre>
          <p>© 2026 Yitbarek Ejigu. Built with Next.js & Framer Motion ✨</p>
        </footer>
      </main>
    </>
  );
}
