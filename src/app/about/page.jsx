// "use client"
// import React from 'react'

// function Page() {
//   return (
//     <div>
//       <div>
//       <h1>Traditional Wisdom for Modern Wellness</h1>
//       <p>ARAYAL is an Ayurveda-focused online consultation platform dedicated to helping individuals discover a natural and balanced approach to health and wellness. We combine the timeless principles of Ayurveda with personalized guidance to help you understand your body's needs and make healthier lifestyle choices.Through online consultations, dietary recommendations, lifestyle guidance, herbal wellness support, and follow-up care, ARAYAL makes Ayurvedic guidance accessible from wherever you are.</p>
//       </div>
//     <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
//         <div>
//       <h3>Personalized Care</h3>
//       <p>Recommendations designed around your individual needs and wellness goals.</p>
//         </div>
//         <div>
//           <h3>Natural Approach</h3>
//           <p>Guidance inspired by traditional Ayurvedic principles.</p>
//         </div>
//         <div>
//           <h3>Online Convenience</h3>
//           <p>Connect with our doctor without the need to travel.</p>
//         </div>
//       </div>
// </div>
//   )
// }

// export default Page
"use client";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Link from "next/link";

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

const values = [
  {
    icon: "🎯",
    title: "Personalized Care",
    text: "Recommendations designed around your individual needs and wellness goals.",
  },
  {
    icon: "🌱",
    title: "Natural Approach",
    text: "Guidance inspired by traditional Ayurvedic principles.",
  },
  {
    icon: "💻",
    title: "Online Convenience",
    text: "Connect with our doctor without the need to travel.",
  },
];

const doshas = [
  {
    name: "Vata",
    element: "Air & Space",
    text: "Governs movement, breath, and creativity. When balanced, it brings energy and clarity.",
  },
  {
    name: "Pitta",
    element: "Fire & Water",
    text: "Governs digestion and metabolism. When balanced, it brings focus and strong vitality.",
  },
  {
    name: "Kapha",
    element: "Earth & Water",
    text: "Governs structure and stability. When balanced, it brings strength and calm steadiness.",
  },
];

function Page() {
  return (
    <div className={`about-page ${display.variable} ${body.variable}`}>
      {/* Intro */}
      <section className="intro">
        <span className="eyebrow">🌿 About ARAYAL</span>
        <h1>Traditional Wisdom for Modern Wellness</h1>
        <p>
          ARAYAL is an Ayurveda-focused online consultation platform
          dedicated to helping individuals discover a natural and balanced
          approach to health and wellness. We combine the timeless
          principles of Ayurveda with personalized guidance to help you
          understand your body&apos;s needs and make healthier lifestyle
          choices.
        </p>
        <p>
          Through online consultations, dietary recommendations, lifestyle
          guidance, herbal wellness support, and follow-up care, ARAYAL
          makes Ayurvedic guidance accessible from wherever you are.
        </p>
      </section>

      {/* Value cards */}
      <section className="values">
        {values.map((v) => (
          <div className="value-card" key={v.title}>
            <span className="value-icon">{v.icon}</span>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </div>
        ))}
      </section>

      {/* Tridosha section */}
      <section className="doshas">
        <div className="doshas-header">
          <h2>Rooted in the Tridosha</h2>
          <p>
            Ayurveda views each person as a unique balance of three life
            energies, or doshas. Understanding yours is the first step
            toward truly personalized care.
          </p>
        </div>
        <div className="dosha-grid">
          {doshas.map((d) => (
            <div className="dosha-card" key={d.name}>
              <h3>{d.name}</h3>
              <span className="dosha-element">{d.element}</span>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <h2>Begin your journey to balance</h2>
        <p>Speak with Dr. Princy and discover what your body truly needs.</p>
        <Link href="/booking" className="btn-primary">
          Book a Consultation
        </Link>
      </section>

      <style jsx global>{`
        :root {
          --leaf-green: #2f4a34;
          --leaf-green-dark: #203024;
          --turmeric: #c68a2e;
          --sandalwood: #f4ecd8;
          --ink: #1d2b20;
        }

        .about-page {
          font-family: var(--font-body), sans-serif;
          color: var(--ink);
          background: #fffdf8;
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
          margin-bottom: 1.2rem;
        }

        /* Intro */
        .intro {
          max-width: 760px;
          margin: 0 auto;
          padding: 4.5rem 1.5rem 3rem;
          text-align: center;
        }

        .intro h1 {
          font-family: var(--font-display), serif;
          font-size: 2.9rem;
          line-height: 1.2;
          font-weight: 600;
          color: var(--leaf-green);
          margin: 0 0 1.3rem;
        }

        .intro p {
          font-size: 1.08rem;
          line-height: 1.7;
          color: #4a4a40;
          margin-bottom: 1rem;
        }

        /* Value cards */
        .values {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          max-width: 1000px;
          margin: 1rem auto 4rem;
          padding: 0 1.5rem;
          flex-wrap: wrap;
        }

        .value-card {
          flex: 1 1 260px;
          max-width: 300px;
          text-align: center;
          background: var(--sandalwood);
          border-top: 3px solid var(--turmeric);
          border-radius: 4px;
          padding: 2rem 1.6rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .value-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(47, 74, 52, 0.12);
        }

        .value-icon {
          font-size: 1.8rem;
          display: block;
          margin-bottom: 0.7rem;
        }

        .value-card h3 {
          font-family: var(--font-display), serif;
          font-size: 1.3rem;
          color: var(--leaf-green);
          margin: 0 0 0.5rem;
        }

        .value-card p {
          font-size: 0.95rem;
          line-height: 1.55;
          color: #4a4a40;
          margin: 0;
        }

        /* Doshas */
        .doshas {
          background: var(--sandalwood);
          padding: 4rem 1.5rem;
        }

        .doshas-header {
          max-width: 620px;
          margin: 0 auto 2.5rem;
          text-align: center;
        }

        .doshas-header h2 {
          font-family: var(--font-display), serif;
          font-size: 2.1rem;
          color: var(--leaf-green);
          margin-bottom: 0.6rem;
        }

        .doshas-header p {
          font-size: 1.02rem;
          color: #57574c;
          line-height: 1.6;
        }

        .dosha-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .dosha-card {
          background: #fffdf8;
          border-radius: 6px;
          padding: 1.8rem 1.6rem;
          text-align: center;
          box-shadow: 0 4px 16px rgba(47, 74, 52, 0.08);
        }

        .dosha-card h3 {
          font-family: var(--font-display), serif;
          font-size: 1.6rem;
          color: var(--turmeric);
          margin: 0 0 0.2rem;
        }

        .dosha-element {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--leaf-green);
          margin-bottom: 0.8rem;
        }

        .dosha-card p {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #4a4a40;
          margin: 0;
        }

        /* CTA */
        .cta-banner {
          text-align: center;
          background: var(--leaf-green);
          color: var(--sandalwood);
          padding: 4rem 1.5rem;
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

        .btn-primary {
          font-family: var(--font-display), serif;
          font-weight: 600;
          font-size: 1.05rem;
          color: var(--ink);
          background: var(--turmeric);
          border: 1px solid var(--turmeric);
          border-radius: 2px;
          padding: 0.7rem 1.6rem;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s ease, transform 0.15s ease;
        }

        .btn-primary:hover {
          background: #d99b3f;
          transform: translateY(-1px);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .dosha-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .intro h1 {
            font-size: 2.1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Page;