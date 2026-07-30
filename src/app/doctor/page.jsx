// import React from 'react'

// function Page() {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
//         <div>
//             <img src="princy.jpeg" alt="Doctor" style={{ width: '200px', height: '200px' }} />
//         </div>
//       <div>
//         <h2>Meet Your Ayurveda Doctor</h2>
//         <h3>Dr. Princy</h3>
//         <p>Dr. Princy is an experienced Ayurveda practitioner with over 10 years of professional experience in providing personalized Ayurvedic care and wellness guidance.

// She has gained valuable clinical experience through her work at KMCT and an Ayurveda clinic in Dubai, giving her exposure to diverse patient needs and healthcare environments.

// Through ARAYAL, Dr. Princy brings her experience and Ayurvedic knowledge to convenient online consultations, helping individuals receive personalized guidance from the comfort of their homes.</p>
//         <h3>Personalized Ayurvedic Consultation</h3>
//         <h3>Diet & Lifestyle Guidance</h3>
//         <h3>Natural Wellness Support</h3>
//         <h3>Follow-up Care</h3>
//         <button>Consult With Dr.Princy</button>
//       </div>
//     </div>
//   )
// }

// export default Page



import Link from "next/link";
import Image from "next/image";
import { Cormorant_Garamond, Jost } from "next/font/google";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const expertise = [
  { icon: "🩺", title: "Personalized Ayurvedic Consultation" },
  { icon: "🥗", title: "Diet & Lifestyle Guidance" },
  { icon: "🌿", title: "Natural Wellness Support" },
  { icon: "🔄", title: "Follow-up Care" },
];

const credentials = [
  {
    icon: "🏥",
    title: "KMCT",
    text: "Clinical experience in a multi-specialty hospital setting.",
  },
  {
    icon: "🌍",
    title: "Dubai Ayurveda Clinic",
    text: "Exposure to diverse patient needs across cultures.",
  },
  {
    icon: "⏳",
    title: "10+ Years",
    text: "Professional experience in Ayurvedic care.",
  },
];

function Page() {
  return (
    <div className={`doctor-page ${display.variable} ${body.variable}`}>
      <section className="hero-section">
        <div className="doctor-card">
          <div className="doctor-photo-wrap">
            <Image
              src="/princy.jpeg"
              alt="Dr. Princy, Ayurveda Doctor"
              width={260}
              height={260}
              className="doctor-photo"
            />
          </div>

          <div className="doctor-info">
            <span className="eyebrow">🌿 Meet Your Ayurveda Doctor</span>
            <h1>Dr. Princy</h1>

            <p>
              Dr. Princy is an experienced Ayurveda practitioner with over
              10 years of professional experience in providing personalized
              Ayurvedic care and wellness guidance.
            </p>

            <p>
              She has gained valuable clinical experience through her work
              at KMCT and an Ayurveda clinic in Dubai, giving her exposure
              to diverse patient needs and healthcare environments.
            </p>

            <p>
              Through ARAYAL, Dr. Princy brings her experience and
              Ayurvedic knowledge to convenient online consultations,
              helping individuals receive personalized guidance from the
              comfort of their homes.
            </p>

            <Link href="/booking" className="btn-primary">
              Consult With Dr. Princy
            </Link>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="credentials">
        {credentials.map((c) => (
          <div className="credential-card" key={c.title}>
            <span className="credential-icon">{c.icon}</span>
            <h4>{c.title}</h4>
            <p>{c.text}</p>
          </div>
        ))}
      </section>

      {/* Expertise */}
      <section className="expertise">
        <h2>Areas of Expertise</h2>

        <div className="expertise-grid">
          {expertise.map((e) => (
            <div className="expertise-item" key={e.title}>
              <span className="expertise-icon">{e.icon}</span>
              <span>{e.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <h2>Begin your consultation with Dr. Princy</h2>
        <p>Personalized Ayurvedic guidance, from wherever you are.</p>

        <Link href="/booking" className="btn-primary">
          Book a Consultation
        </Link>
      </section>

      <style>{`
        :root {
          --leaf-green: #2f4a34;
          --leaf-green-dark: #203024;
          --turmeric: #c68a2e;
          --sandalwood: #f4ecd8;
          --ink: #1d2b20;
        }

        * {
          box-sizing: border-box;
        }

        .doctor-page {
          font-family: var(--font-body), sans-serif;
          color: var(--ink);
          background: #fffdf8;
          width: 100%;
          overflow-x: hidden;
        }

        .eyebrow {
          display: inline-block;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          color: var(--leaf-green);
          background: var(--sandalwood);
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          margin-bottom: 1rem;
          margin-top: 100px;
        }

        /* Hero section + contained card */
        .hero-section {
          padding: 3rem 2rem;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .doctor-card {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          max-width: 1200px;
          width: 100%;
          background: #ffffff;
          border-radius: 2px;
          padding: 2.5rem 3rem;
        }

        .doctor-photo-wrap {
          flex-shrink: 0;
        }

        .doctor-photo {
          width: 260px;
          height: 260px;
          object-fit: cover;
          border-radius: 10px;
          border: 3px solid var(--sandalwood);
          outline: 2px solid var(--turmeric);
          outline-offset: 4px;
        }

        .doctor-info {
          flex: 1;
          min-width: 0;
        }

        .doctor-info h1 {
          font-family: var(--font-display), serif;
          font-size: 2.4rem;
          font-weight: 600;
          color: var(--leaf-green);
          margin: 0 0 1rem;
        }

        .doctor-info p {
          font-size: 1rem;
          line-height: 1.65;
          color: #4a4a40;
          margin-bottom: 0.9rem;
        }

        .btn-primary {
          display: inline-block;
          margin-top: 0.5rem;
          font-family: var(--font-display), serif;
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--ink);
          background: var(--turmeric);
          border: 1px solid var(--turmeric);
          border-radius: 2px;
          padding: 0.7rem 1.6rem;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.15s ease;
          margin-left: 160px;
        }

        .btn-primary:hover {
          background: #d99b3f;
          transform: translateY(-1px);
        }

        /* Credentials */
        .credentials {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem 4rem;
          flex-wrap: wrap;
          width: 100%;
        }

        .credential-card {
          flex: 1 1 260px;
          max-width: 383px;
          text-align: center;
          background: var(--sandalwood);
          border-top: 3px solid var(--turmeric);
          border-radius: 4px;
          padding: 1.8rem 1.5rem;
        }

        .credential-icon {
          font-size: 1.7rem;
          display: block;
          margin-bottom: 0.6rem;
        }

        .credential-card h4 {
          font-family: var(--font-display), serif;
          font-size: 1.2rem;
          color: var(--leaf-green);
          margin: 0 0 0.4rem;
        }

        .credential-card p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #4a4a40;
          margin: 0;
        }

        /* Expertise */
        .expertise {
          background: var(--sandalwood);
          padding: 4rem 1.5rem;
          text-align: center;
          width: 100%;
        }

        .expertise h2 {
          font-family: var(--font-display), serif;
          font-size: 2.1rem;
          color: var(--leaf-green);
          margin: 0 0 2rem;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.2rem;
          max-width: 1000px;
          margin: 0 auto;
          width: 100%;
        }

        .expertise-item {
          background: #fffdf8;
          border-radius: 6px;
          padding: 1.4rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 500;
          font-size: 0.92rem;
          color: var(--ink);
          box-shadow: 0 4px 14px rgba(47, 74, 52, 0.07);
          min-width: 0;
        }

        .expertise-icon {
          font-size: 1.5rem;
        }

        /* CTA */
        .cta-banner {
          text-align: center;
          background: var(--leaf-green);
          color: var(--sandalwood);
          padding: 4rem 1.5rem;
          width: 100%;
        }

        .cta-banner h2 {
          font-family: var(--font-display), serif;
          font-size: 2.1rem;
          margin-bottom: 0.6rem;
        }

        .cta-banner p {
          font-size: 1.05rem;
          margin-bottom: 1.6rem;
          opacity: 0.9;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1000px) {
          .doctor-card {
            gap: 2rem;
            padding: 2rem;
          }

          .doctor-photo {
            width: 230px;
            height: 230px;
          }

          .btn-primary {
            margin-left: 80px;
          }

          .expertise-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 800px) {
          .hero-section {
            padding: 2rem 1rem;
          }

          .doctor-card {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1.5rem;
            gap: 1.5rem;
          }

          .doctor-photo {
            width: 220px;
            height: 220px;
          }

          .eyebrow {
            margin-top: 0;
          }

          .doctor-info h1 {
            font-size: 2.2rem;
          }

          .doctor-info p {
            font-size: 0.95rem;
          }

          .btn-primary {
            margin-left: 0;
          }

          .credentials {
            padding: 0 1rem 3rem;
            gap: 1rem;
          }

          .credential-card {
            width: 100%;
            max-width: 100%;
            flex: 1 1 100%;
          }

          .expertise {
            padding: 3rem 1rem;
          }

          .expertise-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .expertise-item {
            min-height: 120px;
          }

          .cta-banner {
            padding: 3rem 1rem;
          }

          .cta-banner h2 {
            font-size: 1.8rem;
          }

          .cta-banner p {
            font-size: 0.95rem;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 600px) {
          .hero-section {
            padding: 1.5rem 0.75rem;
          }

          .doctor-card {
            padding: 1.5rem 1rem;
          }

          .doctor-photo {
            width: 200px;
            height: 200px;
          }

          .doctor-info h1 {
            font-size: 2rem;
          }

          .doctor-info p {
            font-size: 0.92rem;
            line-height: 1.6;
          }

          .btn-primary {
            font-size: 1rem;
            padding: 0.7rem 1.2rem;
            margin-left: 0;
            max-width: 100%;
          }

          .credentials {
            padding: 0 0.75rem 2.5rem;
          }

          .credential-card {
            padding: 1.5rem 1rem;
          }

          .expertise {
            padding: 2.5rem 0.75rem;
          }

          .expertise h2 {
            font-size: 1.8rem;
          }

          .expertise-grid {
            grid-template-columns: 1fr;
            gap: 0.9rem;
          }

          .expertise-item {
            min-height: auto;
            padding: 1.2rem 0.8rem;
          }

          .cta-banner {
            padding: 2.75rem 1rem;
          }

          .cta-banner h2 {
            font-size: 1.7rem;
          }

          .cta-banner p {
            font-size: 0.9rem;
          }
        }

        /* =========================
           VERY SMALL MOBILE
        ========================= */

        @media (max-width: 400px) {
          .doctor-photo {
            width: 180px;
            height: 180px;
          }

          .doctor-info h1 {
            font-size: 1.8rem;
          }

          .doctor-info p {
            font-size: 0.88rem;
          }

          .eyebrow {
            font-size: 0.78rem;
            padding: 0.3rem 0.7rem;
          }

          .btn-primary {
            width: 100%;
            text-align: center;
          }

          .credential-card h4 {
            font-size: 1.1rem;
          }

          .credential-card p {
            font-size: 0.85rem;
          }

          .cta-banner h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Page;