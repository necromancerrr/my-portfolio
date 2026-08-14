import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import AnimatedSection from '@/components/AnimatedSection';
import SkillTag from '@/components/SkillTag';
import ScrollProgress from '@/components/ScrollProgress';
import SectionHeading from '@/components/SectionHeading';

const projects = [
  {
    title: 'AI Career-Exposure Tool',
    role: 'Google SWE intern',
    description:
      'Frontend for an AI career-exposure tool with a two-level D3 treemap over 200+ U.S. college majors, sized by graduate count and colored by AI-exposure score.',
    impact: 'Helped cut advisor time-to-first-token from 8.2s to 1.0s on a 4-person team.',
    tags: ['React', 'TypeScript', 'D3', 'Gemini', 'Cloud Run'],
    date: 'Jul 2026 - Aug 2026',
    status: 'COMPLETE',
  },
  {
    title: 'LoopIn - University App',
    role: 'Founder and developer',
    description:
      'Cross-platform university app MVP for study sessions, campus events, Firebase auth/CRUD, and early AI-assisted scheduling.',
    impact: 'Turns scattered campus coordination into a product students can actually use.',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    date: 'Jun 2025 - Present',
    status: 'IN_PROGRESS',
  },
  {
    title: 'Premier League Match Predictor',
    role: 'ML engineer',
    description:
      'Prediction pipeline using features engineered from 1,100+ matches across 3+ seasons with Logistic Regression and Random Forest classifiers.',
    impact: '~68% accuracy, a 12% lift over baseline.',
    tags: ['Python', 'scikit-learn', 'ML'],
    date: 'Jan 2025 - Feb 2025',
    status: 'COMPLETE',
  },
  {
    title: '@stdlib/symbol/to-string-tag',
    role: 'Open-source contributor',
    description:
      'Authored and submitted a new stdlib package with implementation, tests, TypeScript declarations, docs, and namespace exports.',
    impact: '11-file contribution shaped around existing codebase patterns instead of rule suppression.',
    tags: ['JavaScript', 'TypeScript', 'Testing', 'Docs'],
    date: 'Jun 2026 - Present',
    status: 'IN_PROGRESS',
  },
  {
    title: 'Java Code Coach',
    role: 'Product builder',
    description:
      'Web app that checks Java code against UW CSF style guidelines with a live editor and inline feedback loop.',
    impact: 'Makes style feedback faster, more consistent, and easier to act on.',
    tags: ['Java', 'Web', 'Education'],
    date: 'May 2025',
    link: 'https://lovable.dev/projects/3ba2c2d6-58f6-43fb-b4c9-8569d9263209',
    status: 'DEPLOYED',
  },
];

const skillIcons: Record<string, string> = {
  Java: '/icons/java.png',
  Python: '/icons/python.png',
  'C/C++': '/icons/c.png',
  TypeScript: '/icons/typescript.png',
  JavaScript: '/icons/javascript.png',
  Swift: '/icons/swift.svg',
  SQL: '/icons/sql.svg',
  R: '/icons/r.svg',
  React: '/icons/react.svg',
  'Next.js': '/icons/nextjs.svg',
  'React Native': '/icons/react.svg',
  Firebase: '/icons/firebase.svg',
  'Node.js': '/icons/nodejs.svg',
  MySQL: '/icons/mysql.svg',
  Redis: '/icons/redis.svg',
  AWS: '/icons/aws.svg',
  Docker: '/icons/docker.svg',
  Git: '/icons/git.svg',
  Figma: '/icons/figma.svg',
  Jupyter: '/icons/jupyter.svg',
};

const skills = [
  {
    category: 'Product interfaces',
    summary: 'I build flows that feel clear, responsive, and usable on real devices.',
    items: ['React', 'Next.js', 'React Native', 'TypeScript', 'JavaScript', 'D3'],
  },
  {
    category: 'Data and backend',
    summary: 'I can take an idea from data model to working product behavior.',
    items: ['Python', 'Firebase', 'Node.js', 'SQL', 'MySQL', 'Redis', 'Google Cloud'],
  },
  {
    category: 'Systems and tools',
    summary: 'I am comfortable shipping, debugging, documenting, and collaborating.',
    items: ['Java', 'C/C++', 'AWS', 'Docker', 'Git', 'Claude Code', 'Figma', 'Jupyter'],
  },
];

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Google, Breakthrough Sprintern',
    date: 'Jul 2026 - Aug 2026',
    points: [
      'Built the frontend for an AI career-exposure tool using Vite, React, TypeScript, and D3.',
      'Rendered a two-level treemap over 200+ U.S. college majors with search and click-through to a grounded Gemini advisor.',
      'Helped reduce advisor time-to-first-token from 8.2s to 1.0s and deployed with Cloud Run, Cloud Build, BigQuery, API-key auth, rate limiting, and cost controls.',
    ],
  },
  {
    role: 'Software Developer, Dev Team',
    company: 'UW Blockchain Society',
    date: 'Dec 2025 - Present',
    points: [
      'Shipped production website features for student and recruiter access to blockchain project listings.',
      'Built reusable React and TypeScript components for a student career portal with clearer navigation.',
      'Contributed to a shared team codebase through code review and cross-functional planning.',
    ],
  },
  {
    role: 'Event Coordinator',
    company: 'Google Development Club, University of Washington',
    date: 'Jan 2025 - Present',
    points: [
      'Coordinated 4+ events with BITS, IUGA, and ColorStack, reaching 100+ students.',
      'Raised attendance by 40% through targeted outreach and stronger event positioning.',
    ],
  },
  {
    role: 'Python and Mixed Reality Instructor',
    company: 'AVELA',
    date: 'Sep 2024 - Present',
    points: [
      'Led Python and mixed-reality workshops for 40+ high school students.',
      'Designed 5+ STEM outreach workshops for students preparing for college-level CS.',
    ],
  },
  {
    role: 'Mentor and Tutor',
    company: 'Umoja and Promise, Highline College',
    date: 'Sep 2022 - Jun 2024',
    points: [
      'Tutored 50+ students in math and English, supporting retention in STEM courses.',
      'Organized 6+ academic workshops that grew attendance and student leadership.',
    ],
  },
];

const development = [
  {
    title: 'CodePath AI 110',
    status: 'Completed 2026',
    detail:
      'Built four AI projects spanning debugging, ML evaluation, recommendation systems, applied AI system design, RAG pipelines, and agentic workflows.',
  },
  {
    title: 'CodePath AI 301',
    status: 'In progress',
    detail:
      'Open-source capstone focused on production contribution habits: tests, TypeScript declarations, docs, namespace exports, and codebase-aligned implementation.',
  },
];

const signals = [
  {
    label: 'Builder',
    value: 'Founder of LoopIn',
    detail: 'Turning campus pain points into a shipped mobile product.',
  },
  {
    label: 'Engineer',
    value: 'AI + full-stack',
    detail: 'Comfortable across interfaces, data, backend, AI tools, and deployment.',
  },
  {
    label: 'Community',
    value: 'Mentor and organizer',
    detail: '50+ students mentored and 100+ students reached through events.',
  },
];

const principles = [
  'Make the first useful version real.',
  'Design for people who are busy.',
  'Use data to sharpen judgment.',
  'Write code the next person can understand.',
];

const contacts = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yitbareek/', external: true },
  { name: 'GitHub', href: 'https://github.com/necromancerrr', external: true },
  { name: 'Email', href: 'mailto:yejigu@uw.edu', external: false },
];

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />

        <section className="signal-strip" aria-label="Portfolio signals">
          <div className="container signal-grid">
            {signals.map((signal) => (
              <article className="signal-card" key={signal.label}>
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
                <p>{signal.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-column">
            <div>
              <SectionHeading index={1} label="about" title="What I bring" />
              <AnimatedSection delay={0.1}>
                <p className="about-copy">
                  I&apos;m a Computer Science student at the University of Washington, a Google
                  Software Engineering Intern through Break Through Tech, and the founder of
                  LoopIn. I like work that sits close to real people: tools for students, products
                  with useful data, and interfaces that make complicated systems easier to trust.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={0.2} className="principle-panel">
              <p className="panel-kicker">Working principles</p>
              <ul>
                {principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </section>

        <section id="skills" className="section section-muted">
          <div className="container">
            <SectionHeading index={2} label="capabilities" title="How I build" />
            <div className="skill-grid">
              {skills.map((skill, catIndex) => (
                <AnimatedSection key={skill.category} delay={catIndex * 0.08} className="skill-group">
                  <h3>{skill.category}</h3>
                  <p>{skill.summary}</p>
                  <div className="skill-tags">
                    {skill.items.map((item, i) => (
                      <SkillTag key={item} item={item} icon={skillIcons[item]} index={i} />
                    ))}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-intro">
              <SectionHeading index={3} label="selected work" title="Projects with a point" />
              <p>
                Each project is here because it shows a useful engineering signal: product
                judgment, data thinking, implementation depth, or care for learners.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section section-muted">
          <div className="container">
            <div className="section-intro">
              <SectionHeading index={4} label="experience" title="Where I have practiced" />
              <p>
                A mix of software work, teaching, mentoring, and student leadership. The through
                line is building things that help people move faster.
              </p>
            </div>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <ExperienceCard key={`${exp.role}-${exp.company}`} {...exp} index={index} />
              ))}
            </div>

            <div className="development-grid">
              {development.map((item) => (
                <article className="development-card" key={item.title}>
                  <span>{item.status}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-shell">
            <div>
              <p className="section-eyebrow">{'// 05 - connect'}</p>
              <h2 className="display-title">Let&apos;s build something useful.</h2>
            </div>
            <div className="contact-copy">
              <p>
                Open to internships, collaborations, and conversations about software worth
                shipping.
              </p>
              <a href="mailto:yejigu@uw.edu" className="contact-email">
                yejigu@uw.edu
              </a>
              <div className="contact-links">
                {contacts.map((contact) => (
                  <a
                    key={contact.name}
                    href={contact.href}
                    {...(contact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {contact.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-bar">
            <span>© {new Date().getFullYear()} Yitbarek Ejigu</span>
            <span>Designed and built with Next.js</span>
            <a href="#">Back to top</a>
          </div>
        </section>
      </main>
    </>
  );
}
