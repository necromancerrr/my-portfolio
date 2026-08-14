import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import SkillTag from '@/components/SkillTag';
import ScrollProgress from '@/components/ScrollProgress';
import Marquee from '@/components/Marquee';
import SectionHeading from '@/components/SectionHeading';
import RevealText from '@/components/RevealText';
import Image from 'next/image';

const projects = [
  {
    title: 'LoopIn - University App',
    description: 'Founder & developer. Cross-platform university app MVP with study sessions, campus events, Firebase auth/CRUD, and early AI-assisted scheduling features.',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    date: 'Jun 2025 - Present',
    status: 'IN_PROGRESS',
  },
  {
    title: 'Premier League Match Predictor',
    description: 'ML model achieving ~68% accuracy across 3+ seasons, a 12% improvement over baseline. Engineered features from 1,100+ matches with Logistic Regression and Random Forest classifiers.',
    tags: ['Python', 'scikit-learn', 'ML'],
    date: 'Jan 2025 - Feb 2025',
    status: 'COMPLETE',
  },
  {
    title: 'Real-Time Stock Market App',
    description: 'Full-stack dashboard with live prices, interactive charts, and AI-powered insights using Finnhub API.',
    tags: ['Next.js 14', 'TypeScript', 'Redis'],
    date: 'Sep 2025 - Present',
    status: 'IN_PROGRESS',
  },
  {
    title: 'Java Code Coach',
    description: 'Web app that checks Java code against UW CSF style guidelines with live editor and inline feedback system.',
    tags: ['Java', 'Web', 'Education'],
    date: 'May 2025',
    link: 'https://lovable.dev/projects/3ba2c2d6-58f6-43fb-b4c9-8569d9263209',
    status: 'DEPLOYED',
  },
];

const skillIcons: Record<string, string> = {
  // Languages
  'Java': '/icons/java.png',
  'Python': '/icons/python.png',
  'C/C++': '/icons/c.png',
  'TypeScript': '/icons/typescript.png',
  'JavaScript': '/icons/javascript.png',
  'Swift': '/icons/swift.svg',
  'SQL': '/icons/sql.svg',
  'R': '/icons/r.svg',
  // Frontend
  'React': '/icons/react.svg',
  'Next.js': '/icons/nextjs.svg',
  'HTML/CSS': '/icons/html5.svg',
  'React Native': '/icons/react.svg',
  // Backend
  'Firebase': '/icons/firebase.svg',
  'Node.js': '/icons/nodejs.svg',
  'MySQL': '/icons/mysql.svg',
  'Redis': '/icons/redis.svg',
  'AWS': '/icons/aws.svg',
  'Docker': '/icons/docker.svg',
  // Tools
  'Git': '/icons/git.svg',
  'VS Code': '/icons/vscode.svg',
  'Figma': '/icons/figma.svg',
  'Xcode': '/icons/xcode.svg',
  'Jupyter': '/icons/jupyter.svg',
};

const skills = [
  { category: 'Languages', icon: '{ }', items: ['Java', 'Python', 'C/C++', 'SQL', 'TypeScript', 'JavaScript', 'Swift', 'R'] },
  { category: 'Frontend', icon: '◈', items: ['React', 'Next.js', 'React Native', 'HTML/CSS'] },
  { category: 'Backend', icon: '⬡', items: ['Firebase', 'Node.js', 'MySQL', 'Redis', 'AWS', 'Docker'] },
  { category: 'Tools', icon: '⚙', items: ['Git', 'VS Code', 'Figma', 'Xcode', 'Jupyter'] },
];

const experiences = [
  {
    role: 'Software Engineering Sprintern',
    company: 'Google · Break Through Tech',
    date: 'Jul 2026',
    points: [
      "Selected for Break Through Tech's competitive 3-week Sprinternship program placing top CS students at leading tech companies",
      'Contributing to a team project at Google, collaborating with engineers to deliver production-ready work on a sprint timeline',
    ],
  },
  {
    role: 'Software Developer (Dev Team)',
    company: 'UW Blockchain Society',
    date: 'Dec 2025 - Present',
    points: [
      'Developed and shipped production features for the UW Blockchain Society website, giving students and recruiters real-time access to blockchain project listings',
      'Implemented reusable frontend components for a student career portal using React and TypeScript, improving navigation clarity and accessibility',
      'Contributed to a shared production codebase within a cross-functional student engineering team, streamlining code-review workflows',
    ],
  },
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
      'Led Python and mixed-reality workshops for 40+ high school students, guiding participants to complete a final mixed-reality project',
      'Designed and delivered 5+ STEM outreach workshops preparing college-bound students for intro CS coursework',
    ],
  },
  {
    role: 'Mentor & Tutor',
    company: 'Umoja and Promise, Highline College',
    date: 'Sep 2022 - Jun 2024',
    points: [
      'Tutored 50+ students in math (Algebra through Calculus) and English, improving grades and boosting retention in STEM courses',
      'Organized and led 6+ academic workshops, growing attendance and leadership involvement across cohorts',
    ],
  },
];

const contacts = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yitbareek/', icon: '/icons/linkedin.png', iconSize: 22, external: true },
  { name: 'GitHub', href: 'https://github.com/necromancerrr', icon: '/icons/github.png', iconSize: 24, external: true },
  { name: 'Email', href: 'mailto:yejigu@uw.edu', icon: '/icons/email.png', iconSize: 22, external: false },
];

const marqueeItems = [
  'Software Engineer',
  "UW CS '27",
  'Founder · LoopIn',
  'Google Sprintern',
  'Full-Stack',
  'Seattle, WA',
];

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />

        {/* Ticker strip - the story's title crawl */}
        <Marquee items={marqueeItems} />

        {/* Chapter 01 - About */}
        <section id="about" className="section">
          <div className="container" style={{ maxWidth: '860px' }}>
            <SectionHeading index={1} label="whoami" title="Who am I?" />

            {/* Editorial statement, revealed word by word */}
            <RevealText
              className="statement"
              style={{ marginBottom: '36px' }}
              segments={[
                { text: 'I turn ideas into' },
                { text: 'clean, usable software', highlight: true },
                { text: '— and I learn by' },
                { text: 'shipping real products.', highlight: true },
              ]}
            />

            {/* Bio Paragraph */}
            <AnimatedSection delay={0.1}>
              <p style={{
                fontSize: '17px',
                lineHeight: 1.9,
                color: 'var(--text-muted)',
                textAlign: 'left',
              }}>
                I&apos;m a Computer Science student at the University of Washington (B.S. &apos;27, Informatics
                minor) and a Software Engineering Sprintern at Google through Break Through
                Tech. I started at Highline College, where I earned my A.S. in Computer Science and
                mentored 50+ students, before transferring to UW. Outside class I&apos;m building LoopIn, a
                university app for study sessions and campus events, shipping features for the UW
                Blockchain Society, and teaching Python and mixed-reality workshops to high school
                students with AVELA. I learn best by shipping real products, and I care about writing
                thoughtful code and designing software people actually want to use.
              </p>
            </AnimatedSection>

            {/* Numbers that back the story */}
            <AnimatedSection delay={0.2}>
              <div className="stat-row">
                <div className="stat">
                  <span className="stat-value">50+</span>
                  <span className="stat-label">students mentored</span>
                </div>
                <div className="stat">
                  <span className="stat-value">100+</span>
                  <span className="stat-label">students reached</span>
                </div>
                <div className="stat">
                  <span className="stat-value">1,100+</span>
                  <span className="stat-label">matches modeled</span>
                </div>
                <div className="stat">
                  <span className="stat-value">Google</span>
                  <span className="stat-label">swe sprintern</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Chapter 02 - Skills */}
        <section id="skills" className="section section-muted" style={{ position: 'relative' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
            <SectionHeading index={2} label="stack" title="Technical Skills" />

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
                      fontFamily: 'var(--font-mono), monospace',
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
                        <SkillTag key={item} item={item} icon={skillIcons[item]} index={i} />
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

        {/* Chapter 03 - Projects */}
        <section id="projects" className="section" style={{ position: 'relative' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <SectionHeading index={3} label="builds" title="Featured Projects" />
            <StaggerContainer className="grid grid-2">
              {projects.map((project, index) => (
                <StaggerItem key={project.title}>
                  <ProjectCard {...project} index={index} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Chapter 04 - Experience */}
        <section id="experience" className="section section-muted" style={{ position: 'relative' }}>
          <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '860px' }}>
            <SectionHeading index={4} label="changelog" title="Experience" />
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

        {/* Chapter 05 - Contact: the closing CTA */}
        <section id="contact" style={{
          textAlign: 'center',
          padding: '140px 24px 0',
        }}>
          <div className="container">
            <AnimatedSection>
              <p className="section-eyebrow" style={{ marginBottom: '28px' }}>
                {'// 05 — connect'}
              </p>
              <h2 className="display-title" style={{ marginBottom: '28px' }}>
                Let&apos;s build<br />something real.
              </h2>
              <p style={{
                color: 'var(--text-muted)',
                fontSize: '16px',
                maxWidth: '460px',
                margin: '0 auto 44px',
                lineHeight: 1.8,
              }}>
                Open to internships, collaborations, and good conversations
                about software worth shipping.
              </p>

              {/* Big email CTA */}
              <a href="mailto:yejigu@uw.edu" className="contact-email" style={{ marginBottom: '56px' }}>
                <span>yejigu@uw.edu</span>
              </a>

              {/* Circular Icon Buttons */}
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '56px' }}>
                {contacts.map((contact) => (
                  <a
                    key={contact.name}
                    href={contact.href}
                    title={contact.name}
                    className="contact-icon-btn"
                    {...(contact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <Image
                      src={contact.icon}
                      alt={contact.name}
                      width={contact.iconSize}
                      height={contact.iconSize}
                      unoptimized
                    />
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Footer bar */}
          <div className="footer-bar">
            <span>© {new Date().getFullYear()} Yitbarek Ejigu</span>
            <span>Designed & built from scratch · Next.js</span>
            <a href="#">↑ back to top</a>
          </div>
        </section>
      </main>
    </>
  );
}
