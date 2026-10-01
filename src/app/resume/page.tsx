import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import Reveal from '@/components/Reveal';
import { site } from '@/lib/site';
import styles from './resume.module.css';

export const metadata: Metadata = {
  title: `Resume | ${site.name}`,
  description: `Resume of ${site.name}: software engineering, projects, and leadership.`,
  alternates: { canonical: '/resume' },
};

export default function ResumePage() {
  return (
    <>
      <Nav />
      <main id="main" className={`container ${styles.page}`}>
        <Reveal onMount className={styles.head}>
          <span className="nb-tag">Resume</span>
          <h1 className={styles.title}>One page, up to date.</h1>
          <p className={`mono ${styles.updated}`}>Updated fall 2026</p>
          <div className={styles.actions}>
            <a href={site.resumePdf} download={site.resumeFileName} className="nb-btn nb-btn--sky">
              Download PDF <span aria-hidden="true">↓</span>
            </a>
            <a href={site.resumePdf} target="_blank" rel="noopener noreferrer" className="nb-btn">
              Open in new tab <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>

        <Reveal onMount delay={0.12} className={`nb-card ${styles.frame}`}>
          <div className={`fill-sky ${styles.bar}`}>
            <span className={styles.dots} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className={`mono ${styles.file}`}>Yitbarek_Ejigu_Resume.pdf</span>
          </div>
          <iframe
            className={styles.viewer}
            src={`${site.resumePdf}#view=FitH`}
            title="Resume PDF"
          />
          {/* Mobile browsers render PDFs in iframes poorly, so offer a direct link instead */}
          <div className={styles.fallback}>
            <p className={styles.fallbackTitle}>View the PDF</p>
            <p className={styles.fallbackText}>Your browser opens PDFs best in their own tab.</p>
            <a href={site.resumePdf} target="_blank" rel="noopener noreferrer" className="nb-btn nb-btn--sun">
              Open resume <span aria-hidden="true">↗</span>
            </a>
          </div>
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
