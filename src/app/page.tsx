import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';
import Marquee from '@/components/Marquee';
import MoreProjects from '@/components/MoreProjects';
import Nav from '@/components/Nav';
import Reveal from '@/components/Reveal';
import SectionHeader from '@/components/SectionHeader';
import WorkCard from '@/components/WorkCard';
import { featuredProjects, marqueeItems, moreProjects } from '@/data/portfolio';
import workStyles from '@/components/Work.module.css';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Intro />
        <Marquee items={marqueeItems} />

        <section id="work" className="section" aria-labelledby="work-title">
          <div className="container">
            <SectionHeader
              index={1}
              label="Work"
              id="work-title"
              title="Selected work"
              sub="Products I’ve founded, my Google internship project, and an open-source contribution to stdlib."
            />
            <div className={workStyles.list}>
              {featuredProjects.map((project, i) => (
                <Reveal key={project.name}>
                  <WorkCard project={project} index={i} />
                </Reveal>
              ))}
            </div>
            <Reveal>
              <MoreProjects projects={moreProjects} />
            </Reveal>
          </div>
        </section>

        <section id="experience" className="section" aria-labelledby="experience-title">
          <div className="container">
            <SectionHeader
              index={2}
              label="Experience"
              id="experience-title"
              title="Where I’ve worked"
            />
            <Experience />
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="container">
            <SectionHeader index={3} label="About" id="about-title" title="A bit about me" />
            <About />
          </div>
        </section>

        <section id="contact" className="section" aria-labelledby="contact-title" style={{ paddingBottom: 0 }}>
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
