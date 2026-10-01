import { ImageResponse } from 'next/og';
import { site } from '@/lib/site';

export const alt = `${site.name}, software engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const navy = '#023047';

// Social preview card in the site's neo-brutalist style.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ffffff',
          backgroundImage:
            'linear-gradient(rgba(2,48,71,0.07) 2px, transparent 2px), linear-gradient(90deg, rgba(2,48,71,0.07) 2px, transparent 2px)',
          backgroundSize: '48px 48px',
        }}
      >
        <div style={{ position: 'relative', display: 'flex', width: 980, height: 430 }}>
          <div
            style={{
              position: 'absolute',
              left: 16,
              top: 16,
              width: 980,
              height: 430,
              background: navy,
              borderRadius: 20,
            }}
          />
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 28,
              width: 980,
              height: 430,
              padding: '0 64px',
              background: '#8ecae6',
              border: `6px solid ${navy}`,
              borderRadius: 20,
              color: navy,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignSelf: 'flex-start',
                padding: '10px 22px',
                fontSize: 26,
                fontWeight: 700,
                background: '#ffb703',
                border: `4px solid ${navy}`,
                borderRadius: 999,
                transform: 'rotate(-2deg)',
              }}
            >
              Prev. SWE Intern @ Google
            </div>
            <div style={{ display: 'flex', fontSize: 84, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>
              {site.name}
            </div>
            <div style={{ display: 'flex', fontSize: 32, fontWeight: 600 }}>
              Software engineer · CS @ UW ’27 · Founder of LoopIn & openroles.ai
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
