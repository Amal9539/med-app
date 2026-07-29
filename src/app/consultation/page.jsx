// import React from 'react'

// function Page() {
//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
//         <h1>Your Wellness Journey Starts Here</h1>
//         <div>
//             <h3>Book Your Consultation</h3>
//             <p>Choose a convenient time for your online consultation.</p>
//             <h3>Share Your Concerns</h3>
//             <p>Discuss your health concerns, lifestyle, dietary habits, and wellness goals during your consultation.</p>
//             <h3>Receive Personalized Guidance</h3>
//             <p>Get Ayurvedic recommendations tailored to your individual needs.</p>
//             <h3>Follow Your Wellness Plan</h3>
//             <p>Follow your recommended lifestyle, dietary, and wellness guidance and stay connected through follow-up consultations.</p>
//         </div>
//       </div>
//       <div>
//         <div>
//             <h1>Begin Your Journey Toward Better Wellness</h1>
//             <p>Take the first step toward understanding your body's needs and exploring a more balanced approach to wellbeing with personalized Ayurvedic guidance.</p>
//             <button>Book Your Consultation</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Page



"use client";
import Link from "next/link";
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

const steps = [
  {
    number: "01",
    title: "Book Your Consultation",
    text: "Choose a convenient time for your online consultation.",
  },
  {
    number: "02",
    title: "Share Your Concerns",
    text: "Discuss your health concerns, lifestyle, dietary habits, and wellness goals during your consultation.",
  },
  {
    number: "03",
    title: "Receive Personalized Guidance",
    text: "Get Ayurvedic recommendations tailored to your individual needs.",
  },
  {
    number: "04",
    title: "Follow Your Wellness Plan",
    text: "Follow your recommended lifestyle, dietary, and wellness guidance and stay connected through follow-up consultations.",
  },
];

const prepTips = [
  { icon: "📝", text: "Note any specific health concerns or symptoms you'd like to discuss." },
  { icon: "🍽️", text: "Think about your typical daily meals and eating routine." },
  { icon: "😴", text: "Consider your sleep pattern and general energy levels." },
  { icon: "🧘", text: "Find a quiet, comfortable space for your online session." },
];

function Page() {
  return (
    <div className={`consultation-page ${display.variable} ${body.variable}`}>
      {/* Intro + steps */}
      <section className="intro">
        <span className="eyebrow">🌿 The Process</span>
        <h1>Your Wellness Journey Starts Here</h1>
        <p>
          A simple, guided path from your first consultation to lasting
          Ayurvedic balance.
        </p>
      </section>

      <section className="timeline">
        {steps.map((s, i) => (
          <div className="timeline-item" key={s.number}>
            <div className="timeline-marker">
              <span className="timeline-number">{s.number}</span>
              {i < steps.length - 1 && <span className="timeline-line" />}
            </div>
            <div className="timeline-content">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Preparation tips */}
      <section className="prep">
        <h2>How to Prepare for Your Consultation</h2>
        <div className="prep-grid">
          {prepTips.map((t) => (
            <div className="prep-card" key={t.text}>
              <span className="prep-icon">{t.icon}</span>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <h1>Begin Your Journey Toward Better Wellness</h1>
        <p>
          Take the first step toward understanding your body&apos;s needs
          and exploring a more balanced approach to wellbeing with
          personalized Ayurvedic guidance.
        </p>
        <Link href="/booking" className="btn-primary">
          Book Your Consultation
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

        .consultation-page {
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
          margin-bottom: 1.1rem;
        }

        /* Intro */
        .intro {
          max-width: 680px;
          margin: 0 auto;
          padding: 4.5rem 1.5rem 2.5rem;
          text-align: center;
        }

        .intro h1 {
          font-family: var(--font-display), serif;
          font-size: 2.7rem;
          font-weight: 600;
          color: var(--leaf-green);
          margin: 0 0 1rem;
        }

        .intro p {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #4a4a40;
        }

        /* Timeline */
        .timeline {
          max-width: 720px;
          margin: 0 auto;
          padding: 1rem 1.5rem 4.5rem;
        }

        .timeline-item {
          display: flex;
          gap: 1.6rem;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
        }

        .timeline-number {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--leaf-green);
          color: var(--sandalwood);
          font-family: var(--font-display), serif;
          font-size: 1.15rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timeline-line {
          flex: 1;
          width: 2px;
          background: var(--turmeric);
          margin: 6px 0;
          min-height: 40px;
        }

        .timeline-content {
          padding-bottom: 2.2rem;
        }

        .timeline-content h3 {
          font-family: var(--font-display), serif;
          font-size: 1.35rem;
          color: var(--leaf-green);
          margin: 0.5rem 0 0.5rem;
        }

        .timeline-content p {
          font-size: 0.98rem;
          line-height: 1.6;
          color: #4a4a40;
          margin: 0;
          max-width: 500px;
        }

        /* Prep tips */
        .prep {
          background: var(--sandalwood);
          padding: 4rem 1.5rem;
          text-align: center;
        }

        .prep h2 {
          font-family: var(--font-display), serif;
          font-size: 2.1rem;
          color: var(--leaf-green);
          margin: 0 0 2.2rem;
        }

        .prep-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.3rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .prep-card {
          background: #fffdf8;
          border-radius: 6px;
          padding: 1.6rem 1.2rem;
          box-shadow: 0 4px 14px rgba(47, 74, 52, 0.07);
        }

        .prep-icon {
          font-size: 1.6rem;
          display: block;
          margin-bottom: 0.7rem;
        }

        .prep-card p {
          font-size: 0.92rem;
          line-height: 1.55;
          color: #4a4a40;
          margin: 0;
        }

        /* CTA */
        .cta-banner {
          text-align: center;
          background: var(--leaf-green);
          color: var(--sandalwood);
          padding: 4.5rem 1.5rem;
          max-width: 1960px;
          margin: 0 auto;
          border-radius: 0;
        }

        .cta-banner h1 {
          font-family: var(--font-display), serif;
          font-size: 2.3rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
        }

        .cta-banner p {
          font-size: 1.02rem;
          line-height: 1.6;
          margin-bottom: 1.7rem;
          opacity: 0.92;
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
          .prep-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .intro h1 {
            font-size: 2rem;
          }
          .cta-banner h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Page;