import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import GradientBlobs from '@/components/GradientBlobs';
import SkillTag from '@/components/SkillTag';
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
                I&apos;m a Computer Science student at the University of Washington (B.S. &apos;27, Informatics
                minor) and an incoming Software Engineering Sprintern at Google through Break Through
                Tech. I started at Highline College, where I earned my A.S. in Computer Science and
                mentored 50+ students, before transferring to UW. Outside class I&apos;m building LoopIn, a
                university app for study sessions and campus events, shipping features for the UW
                Blockchain Society, and teaching Python and mixed-reality workshops to high school
                students with AVELA. I learn best by shipping real products, and I care about writing
                thoughtful code and designing software people actually want to use.
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
                Let&apos;s Connect
              </h2>

              {/* Circular Icon Buttons */}
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '60px' }}>
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

          {/* Footer integrated */}
          <div style={{
            marginTop: '40px',
            fontSize: '12px',
            color: 'var(--text-muted)',
          }} className="mono">
            Designed & Built by Yitbarek Ejigu © {new Date().getFullYear()}
          </div>
        </section>
      </main>
    </>
  );
}
