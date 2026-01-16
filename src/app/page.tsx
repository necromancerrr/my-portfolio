"use client";

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import GradientBlobs from '@/components/GradientBlobs';
import { motion } from 'framer-motion';

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
    link: 'https://lovable.dev/projects/3ba2c2d6-58f6-43fb-b4c9-8569d9263209',
  },
];

const skillIcons: Record<string, string> = {
  // Languages - your uploaded icons
  'Java': '/icons/java.png',
  'Python': '/icons/python.png',
  'C/C++': '/icons/c.png',
  'TypeScript': '/icons/typescript.png',
  'JavaScript': '/icons/javascript.png',
  'Swift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
  // Frontend
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'HTML/CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'React Native': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  // Backend
  'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Redis': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  // Tools
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'Xcode': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg',
  'Jupyter': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
};

const skills = [
  { category: 'Languages', icon: '{ }', items: ['Java', 'Python', 'C/C++', 'TypeScript', 'JavaScript', 'Swift'] },
  { category: 'Frontend', icon: '◈', items: ['React', 'Next.js', 'HTML/CSS', 'React Native'] },
  { category: 'Backend', icon: '⬡', items: ['Firebase', 'Node.js', 'MySQL', 'Redis'] },
  { category: 'Tools', icon: '⚙', items: ['Git', 'VS Code', 'Figma', 'Xcode', 'Jupyter'] },
];

const experiences = [
  {
    role: 'Event Coordinator',
    company: 'Google Development Club, University of Washington',
    date: 'Jan 2025 - Present',
    points: [
      'Coordinated 4+ events with BITS, IUGA, and ColorStack, reaching 100+ students',
      'Boosted attendance by 40% through targeted outreach and themed programming',
    ],
  },
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
                I'm a Computer Science student at the University of Washington who builds practical,
                user-focused software. I enjoy working across the stack, from frontend interfaces to
                backend systems, and I learn best by building real products rather than demos. My focus
                is on turning ideas into clean, usable experiences. I care about writing thoughtful code
                and designing software that people actually want to use.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section" style={{ position: 'relative' }}>
          <GradientBlobs variant="skills" />
          <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
            <AnimatedSection>
              <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px' }}>
                Technical Skills
              </h2>
            </AnimatedSection>

            {/* Simple flowing layout */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}>
              {skills.map((skill, catIndex) => (
                <AnimatedSection key={skill.category} delay={catIndex * 0.1}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    flexWrap: 'wrap',
                  }}>
                    {/* Category label */}
                    <span style={{
                      fontSize: '13px',
                      fontFamily: 'JetBrains Mono, monospace',
                      color: 'var(--primary-color)',
                      minWidth: '100px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}>
                      <span style={{ opacity: 0.7 }}>{skill.icon}</span>
                      {skill.category}
                    </span>

                    {/* Skill tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {skill.items.map((item, i) => (
                        <motion.span
                          key={item}
                          className="tag"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            opacity: { duration: 0.4, delay: i * 0.05 },
                          }}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                          }}
                          style={{
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--glass-border)',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            fontSize: '13px',
                            cursor: 'default',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: 'var(--text-color)',
                          }}
                        >
                          {skillIcons[item] && (
                            <img
                              src={skillIcons[item]}
                              alt={item}
                              style={{
                                width: '18px',
                                height: '18px',
                                objectFit: 'contain',
                                // Invert Next.js icon for dark mode
                                filter: item === 'Next.js' ? 'var(--icon-invert, none)' : 'none',
                              }}
                            />
                          )}
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ASCII Divider */}
        <div className="ascii-divider">
          ┌{'─'.repeat(15)}┐ PROJECTS ┌{'─'.repeat(15)}┐
        </div>

        {/* Projects Section */}
        <section id="projects" className="section" style={{ position: 'relative' }}>
          <GradientBlobs variant="projects" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <AnimatedSection>
              <h2 className="section-title" style={{ marginBottom: '48px' }}>Featured Projects</h2>
            </AnimatedSection>
            <StaggerContainer className="grid grid-2">
              {projects.map((project, index) => (
                <StaggerItem key={project.title}>
                  <ProjectCard {...project} index={index} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section" style={{ position: 'relative' }}>
          <GradientBlobs variant="experience" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <AnimatedSection>
              <h2 className="section-title" style={{ marginBottom: '48px', textAlign: 'center' }}>Experience</h2>
            </AnimatedSection>
            <div style={{ maxWidth: '750px', margin: '0 auto' }}>
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={exp.role}
                  {...exp}
                  index={index}
                  isLast={index === experiences.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section - Clean */}
        <section id="contact" style={{
          textAlign: 'center',
          padding: '100px 24px 60px',
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
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--text-color)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <img
                    src="/icons/linkedin.png"
                    alt="LinkedIn"
                    style={{
                      width: '22px',
                      height: '22px',
                      filter: 'var(--icon-filter, none)',
                    }}
                  />
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
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--text-color)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <img
                    src="/icons/github.png"
                    alt="GitHub"
                    style={{
                      width: '24px',
                      height: '24px',
                      filter: 'var(--icon-filter, none)',
                    }}
                  />
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
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-color)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--text-color)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <img
                    src="/icons/email.png"
                    alt="Email"
                    style={{
                      width: '22px',
                      height: '22px',
                      filter: 'var(--icon-filter, none)',
                    }}
                  />
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
