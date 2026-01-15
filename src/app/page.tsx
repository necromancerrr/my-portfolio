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

        {/* About Section - Reference Style */}
        <section id="about" className="section">
          <div className="container" style={{ maxWidth: '800px' }}>
            <AnimatedSection>
              {/* Bold Heading */}
              <h2 style={{
                fontSize: 'clamp(48px, 8vw, 72px)',
                fontWeight: 900,
                color: 'var(--primary-color)',
                textAlign: 'center',
                marginBottom: '8px',
                lineHeight: 1,
              }}>
                Who am I?
              </h2>
            </AnimatedSection>

            {/* Bio Paragraph */}
            <AnimatedSection delay={0.1}>
              <p style={{
                fontSize: '18px',
                lineHeight: 1.9,
                color: 'var(--text-muted)',
                textAlign: 'left',
              }}>
                I'm a Computer Science student at the University of Washington who loves building
                things for the web. I learn best by doing, writing code from scratch and turning
                ideas into simple, usable experiences. Whether it's creating full-stack applications,
                experimenting with machine learning, tinkering with robotics, or designing intuitive
                user interfaces, I'm passionate about crafting software that makes a real impact.
              </p>
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

        {/* Contact Section - Clean */}
        <section id="contact" style={{
          textAlign: 'center',
          padding: '100px 24px 60px',
          position: 'relative',
        }}>
          <div className="container">
            <AnimatedSection>
              {/* Simple Title */}
              <h2 className="section-title" style={{
                fontSize: '1.5rem',
                marginBottom: '32px',
              }}>
                Let's Connect
              </h2>

              {/* Circular Icon Buttons */}
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '60px' }}>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/yitbareek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: '2px solid var(--text-color)',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    color: 'var(--text-color)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                    e.currentTarget.style.color = 'var(--primary-color)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--text-color)';
                    e.currentTarget.style.color = 'var(--text-color)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  in
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/necromancerrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: '2px solid var(--text-color)',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    color: 'var(--text-color)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                    e.currentTarget.style.color = 'var(--primary-color)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--text-color)';
                    e.currentTarget.style.color = 'var(--text-color)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  ⌘
                </a>

                {/* Email */}
                <a
                  href="mailto:yejigu@uw.edu"
                  title="Email"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: '2px solid var(--text-color)',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    color: 'var(--text-color)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                    e.currentTarget.style.color = 'var(--primary-color)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--text-color)';
                    e.currentTarget.style.color = 'var(--text-color)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  ✉
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Footer integrated */}
          <div style={{
            marginTop: '40px',
            fontSize: '12px',
            color: 'var(--text-muted)',
          }} className="mono">
            Design & Built by Yitbarek Ejigu © 2026
          </div>
        </section>
      </main>
    </>
  );
}
