// import Image from "next/image";

// export default function Home() {
//   return (
//     <div>
//       <div>

      
//       <h5>🌿 Trusted Ayurveda Consultation</h5>
//       <h1>Heal Naturally.</h1>
//       <h1>Live Better with Ayurveda.</h1>
//       </div>
//       <div>
//         <h2>
//           Why Choose ARAYAL?
//         </h2>
//         <p>A personalized approach to Ayurveda designed around your wellness journey.</p>
//       </div>
//       <div>
//         <h2>
//           🌿 Holistic Approach
//         </h2>
//         <p>
//           Ayurveda looks at overall wellbeing rather than focusing only on individual concerns.
//         </p>
//         <h2>👩‍⚕️ Expert Guidance</h2>
//         <p>Receive personalized guidance from Dr. Princy based on your individual needs.</p>
//         <h2>💻 Easy Online Access</h2>
//         <p>Consult from the comfort of your home through a convenient online process.</p>
//         <h2>🥗Personalized Recommendations</h2>
//         <p>
//           Receive practical guidance related to diet, lifestyle, and wellness.
//         </p>
//         <h2>Continued Support</h2>
//         <p>Follow-up consultations help you stay connected throughout your wellness journey.</p>
//         <h2>Natural Wellness Philosophy</h2>
//         <p>Discover traditional approaches that encourage balance between body, mind, and lifestyle.</p>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

export default function Home() {
  const features = [
    {
      icon: '🌿',
      title: 'Holistic Approach',
      desc: 'Ayurveda looks at overall wellbeing rather than focusing only on individual concerns.',
    },
    {
      icon: '👩\u200d⚕️',
      title: 'Expert Guidance',
      desc: 'Receive personalized guidance from Dr. Princy based on your individual needs.',
    },
    {
      icon: '💻',
      title: 'Easy Online Access',
      desc: 'Consult from the comfort of your home through a convenient online process.',
    },
    {
      icon: '🥗',
      title: 'Personalized Recommendations',
      desc: 'Receive practical guidance related to diet, lifestyle, and wellness.',
    },
    {
      icon: '🤝',
      title: 'Continued Support',
      desc: 'Follow-up consultations help you stay connected throughout your wellness journey.',
    },
    {
      icon: '⚖️',
      title: 'Natural Wellness Philosophy',
      desc: 'Discover traditional approaches that encourage balance between body, mind, and lifestyle.',
    },
  ];

  return (
    <div className="ar-page">
      <section className="ar-hero">
        <div className="ar-hero-text">
          <span className="ar-eyebrow">🌿 Trusted Ayurveda Consultation</span>
          <h1 className="ar-hero-title">
            Heal Naturally.
            <br />
            Live Better with Ayurveda.
          </h1>
          <p className="ar-hero-sub">
            Traditional healing wisdom, guided by modern care, tailored to your own body and life.
          </p>
          <a href="/booking" className="ar-hero-cta">
            Book a Consultation
          </a>
        </div>

        <div className="ar-hero-visual">
          <div className="ar-hero-blob">
            <Image
              src="/thadam.jpeg"
              alt="Ayurvedic herbs and oils used in traditional consultation"
              fill
              sizes="(max-width: 860px) 100vw, 460px"
              className="ar-hero-img"
              priority
            />
          </div>
          <span className="ar-hero-badge">🌿 100% Natural</span>
        </div>
      </section>

      <div className="ar-divider" aria-hidden="true">
        <svg viewBox="0 0 400 24" preserveAspectRatio="none">
          <path
            d="M0 12 C 40 2, 80 22, 120 12 S 200 2, 240 12 S 320 22, 360 12 S 400 2, 400 12"
            fill="none"
            stroke="url(#ar-divider-grad)"
            strokeWidth="1.5"
          />
          <circle cx="200" cy="12" r="3" fill="#c08829" />
          <defs>
            <linearGradient id="ar-divider-grad" x1="0" y1="0" x2="400" y2="0">
              <stop offset="0%" stopColor="#e3d9c0" />
              <stop offset="50%" stopColor="#c08829" />
              <stop offset="100%" stopColor="#e3d9c0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <section className="ar-why">
        <h2 className="ar-why-title">Why Choose ARAYAL?</h2>
        <p className="ar-why-sub">
          A personalized approach to Ayurveda designed around your wellness journey.
        </p>
      </section>

      <section className="ar-features">
        {features.map((f) => (
          <div className="ar-card" key={f.title}>
            <span className="ar-card-icon">{f.icon}</span>
            <h3 className="ar-card-title">{f.title}</h3>
            <p className="ar-card-desc">{f.desc}</p>
          </div>
        ))}
      </section>

      <style>{`
        .ar-page {
          --cream: #f6f1e3;
          --cream-soft: #fbf8f0;
          --forest: #2f4a3d;
          --forest-soft: #5b7267;
          --gold: #c08829;
          --clay: #a6472a;
          --hairline: #e3d9c0;

          background: var(--cream-soft);
          color: var(--forest);
          font-family: 'Work Sans', Arial, sans-serif;
          overflow-x: hidden;
        }

        .ar-hero {
          max-width: 1080px;
          margin: 0 auto;
          padding: 88px 24px 56px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
        }

        .ar-hero-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .ar-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--cream);
          border: 1px solid var(--hairline);
          color: var(--forest-soft);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 8px 18px;
          border-radius: 999px;
          margin-bottom: 28px;
        }

        .ar-hero-title {
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 600;
          font-size: clamp(2.1rem, 4.2vw, 3.4rem);
          line-height: 1.15;
          color: var(--forest);
          margin: 0 0 20px;
        }

        .ar-hero-sub {
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--forest-soft);
          max-width: 460px;
          margin: 0 0 32px;
        }

        .ar-hero-cta {
          text-decoration: none;
          background: var(--clay);
          color: var(--cream-soft);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 14px 32px;
          border-radius: 3px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .ar-hero-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(166, 71, 42, 0.3);
          background: #954019;
        }

        .ar-hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .ar-hero-blob {
          position: relative;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 1 / 1.05;
          border-radius: 48% 52% 54% 46% / 52% 46% 54% 48%;
          overflow: hidden;
          background: var(--hairline);
          box-shadow: 0 24px 48px rgba(47, 74, 61, 0.16);
        }

        .ar-hero-img {
          object-fit: cover;
        }

        .ar-hero-badge {
          position: absolute;
          bottom: 12px;
          left: -8px;
          background: var(--cream);
          border: 1px solid var(--hairline);
          color: var(--forest);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 10px 18px;
          border-radius: 999px;
          box-shadow: 0 10px 20px rgba(47, 74, 61, 0.12);
        }

        .ar-divider {
          max-width: 400px;
          margin: 0 auto;
          padding: 0 24px 56px;
        }

        .ar-divider svg {
          width: 100%;
          height: 24px;
          display: block;
        }

        .ar-why {
          max-width: 640px;
          margin: 0 auto;
          padding: 0 24px 48px;
          text-align: center;
        }

        .ar-why-title {
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 600;
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          margin: 0 0 14px;
        }

        .ar-why-sub {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--forest-soft);
          margin: 0;
        }

        .ar-features {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px 96px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .ar-card {
          background: var(--cream);
          border: 1px solid var(--hairline);
          border-radius: 6px;
          padding: 32px 26px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .ar-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(47, 74, 61, 0.1);
          border-color: var(--gold);
        }

        .ar-card-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--cream-soft);
          border: 1px solid var(--hairline);
          font-size: 1.4rem;
          margin-bottom: 18px;
        }

        .ar-card-title {
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 600;
          font-size: 1.15rem;
          color: var(--forest);
          margin: 0 0 10px;
        }

        .ar-card-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--forest-soft);
          margin: 0;
        }

        @media (max-width: 860px) {
          .ar-hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .ar-hero-text {
            align-items: center;
          }

          .ar-hero-badge {
            left: 12px;
          }

          .ar-features {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .ar-hero {
            padding: 64px 20px 40px;
          }

          .ar-features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}