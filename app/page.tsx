'use client';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      transition: 'opacity 1s',
      opacity: 1,
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
      color: '#e4e6eb',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    }}>
      {/* Grid background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        opacity: 0.1,
        pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      {/* Animated orbs */}
      <div style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute',
          top: '80px',
          left: '80px',
          width: '384px',
          height: '384px',
          background: '#06b6d4',
          borderRadius: '100%',
          mixBlendMode: 'screen',
          filter: 'blur(96px)',
          opacity: 0.1,
          animation: 'pulse 4s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: '80px',
          width: '384px',
          height: '384px',
          background: '#3b82f6',
          borderRadius: '100%',
          mixBlendMode: 'screen',
          filter: 'blur(96px)',
          opacity: 0.1,
          animation: 'pulse 4s ease-in-out infinite 2s',
        }} />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
      `}</style>

      {/* Main container */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '3rem',
        maxWidth: '540px',
        color: '#fff',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        zIndex: 10,
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 700,
          marginBottom: '0.5rem',
          background: 'linear-gradient(90deg, #00d9ff, #ff00ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>Sharkiez</h1>

        {/* Discord */}
        <div style={{
          color: '#a118d1',
          fontSize: '1rem',
          marginBottom: '2rem',
          fontFamily: 'monospace',
        }}>@itzsharkiez</div>

        {/* Tagline */}
        <div style={{
          marginBottom: '1.5rem',
          lineHeight: 1.6,
        }}>
          <div style={{
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#00d9ff',
            marginBottom: '1.5rem',
          }}>Young builder crafting the future—one server at a time.</div>
        </div>

        {/* Main description */}
        <div style={{
          marginBottom: '1.5rem',
          lineHeight: 1.6,
          fontSize: '0.95rem',
        }}>
          The grind isn't about shortcuts. It's code. It's servers. It's building something the community respects, not something they buy their way into.
        </div>

        {/* Focus areas */}
        <div style={{
          marginBottom: '1.5rem',
          lineHeight: 1.8,
          fontSize: '0.95rem',
        }}>
          <strong>Minecraft servers</strong> that actually play fair.<br />
          <strong>Creative digital projects</strong> with teeth.<br />
          <strong>Business experiments</strong> that teach.<br />
          <strong>Community</strong> that moves together.
        </div>

        {/* Values */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          margin: '1.5rem 0',
        }}>
          <div style={{ paddingLeft: '1.5rem', position: 'relative' }}>
            <div style={{
              content: '"⚡"',
              position: 'absolute',
              left: 0,
              color: '#ff00ff',
            }}>⚡</div>
            Fair play over pay-to-win
          </div>
          <div style={{ paddingLeft: '1.5rem', position: 'relative' }}>
            <div style={{
              content: '"⚡"',
              position: 'absolute',
              left: 0,
              color: '#ff00ff',
            }}>⚡</div>
            Real builds over quick cash
          </div>
          <div style={{ paddingLeft: '1.5rem', position: 'relative' }}>
            <div style={{
              content: '"⚡"',
              position: 'absolute',
              left: 0,
              color: '#ff00ff',
            }}>⚡</div>
            Growth mindset always
          </div>
          <div style={{ paddingLeft: '1.5rem', position: 'relative' }}>
            <div style={{
              content: '"⚡"',
              position: 'absolute',
              left: 0,
              color: '#ff00ff',
            }}>⚡</div>
            Community first
          </div>
        </div>

        {/* Skills */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          margin: '1.5rem 0',
        }}>
          {['Server Setup', 'Game Concepts', 'Creative Direction', 'Community Building', 'System Design'].map((skill) => (
            <span key={skill} style={{
              background: 'linear-gradient(90deg, rgba(0, 217, 255, 0.15), rgba(255, 0, 255, 0.15))',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.85rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}>
              {skill}
            </span>
          ))}
        </div>

        {/* Building section */}
        <div style={{
          fontSize: '0.9rem',
          color: '#00d9ff',
          fontWeight: 600,
          marginTop: '1.5rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          🏗️ Currently building: next-gen Minecraft server with fair mechanics
        </div>

        {/* CTA */}
        <div style={{
          marginTop: '1rem',
          fontSize: '0.85rem',
          color: '#ff00ff',
        }}>
          DM if you're building? Let's connect.
        </div>
      </div>
    </div>
  );
}
