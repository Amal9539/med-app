// import React from 'react'

// function Page() {
//   return (
//     <div>
//       <div>
//         <h1>What is an online Ayurveda consultation?</h1>
//         <p>An online Ayurveda consultation allows you to connect with an Ayurvedic practitioner remotely to discuss your wellness concerns and receive personalized guidance.</p>
//         <h1>How does the consultation work?</h1>
//         <p>After booking a consultation, you can connect with Dr. Princy online at your scheduled time and discuss your concerns, lifestyle, diet, and wellness goals.</p>
//         <h1>Do I need to visit a clinic?</h1>
//         <p>No. ARAYAL's online consultation model allows you to connect remotely from the comfort of your home.</p>
//         <h1>Can I get dietary guidance?</h1>
//         <p>Yes. Dietary guidance can be provided as part of the consultation based on your individual needs and Ayurvedic principles.</p>
//         <h1>Are follow-up consultations available?</h1>
//         <p>Yes. Follow-up consultations can help review your progress and provide continued guidance.</p>
//         <h1>How do I book a consultation?</h1>
//         <p>Click the Book a Consultation button and follow the provided booking or contact process.</p>
//       </div>
//     </div>
//   )
// }

// export default Page


'use client'

import React, { useState } from 'react'
import { Leaf, ChevronDown, Calendar } from 'lucide-react'

const faqs = [
  {
    q: 'What is an online Ayurveda consultation?',
    a: "An online Ayurveda consultation lets you connect with an Ayurvedic practitioner remotely to discuss your wellness concerns and receive personalised guidance, without leaving home.",
  },
  {
    q: 'How does the consultation work?',
    a: 'After booking, you connect with Dr. Princy online at your scheduled time. You\u2019ll talk through your concerns, lifestyle, diet, and wellness goals, and leave with guidance suited to you.',
  },
  {
    q: 'Do I need to visit a clinic?',
    a: "No. ARAYAL's online consultation model lets you connect remotely, from the comfort of your home.",
  },
  {
    q: 'What is Prakriti, and why does it matter?',
    a: 'Prakriti is your individual constitution, shaped by the three doshas \u2014 Vata, Pitta, and Kapha. Understanding yours helps guidance fit your body, rather than following a one-size-fits-all approach.',
  },
  {
    q: 'Can I get dietary guidance?',
    a: 'Yes. Dietary guidance can be included as part of the consultation, based on your individual needs and Ayurvedic principles.',
  },
  {
    q: 'How should I prepare for my consultation?',
    a: "It helps to jot down your current concerns, daily routine, and eating habits beforehand, along with any reports you'd like to share. A little preparation makes the time together go further.",
  },
  {
    q: 'Are follow-up consultations available?',
    a: 'Yes. Follow-up consultations can help review your progress and provide continued guidance as you move forward.',
  },
  {
    q: 'How do I book a consultation?',
    a: 'Click the Book a Consultation button below and follow the provided booking or contact process.',
  },
]

function Page() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="arayal-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600&display=swap');

        .arayal-page {
          --ink: #22301F;
          --tulsi: #17241A;
          --tulsi-2: #223421;
          --sand: #F6EFDE;
          --sand-2: #FBF7EC;
          --gold: #C99A3B;
          --gold-soft: #E4C77E;
          --sage: #7C9070;
          --kumkum: #A3462E;

          background: var(--sand-2);
          color: var(--ink);
          font-family: 'Work Sans', sans-serif;
          min-height: 100vh;
        }

        .arayal-page * { box-sizing: border-box; }

        
        .a-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Work Sans', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold-soft);
          margin-bottom: 1.5rem;
        }

        .a-hero h1 {
          font-family: 'Fraunces', serif;
          font-optical-sizing: auto;
          font-weight: 600;
          font-size: clamp(2.25rem, 5vw, 3.4rem);
          line-height: 1.08;
          margin: 0 0 1.25rem;
          max-width: 22ch;
        }

        .a-hero p.sub {
          font-size: 1.05rem;
          line-height: 1.6;
          color: rgba(246,239,222,0.78);
          max-width: 38ch;
          margin: 0 0 2.25rem;
        }

        .a-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--gold);
          color: var(--tulsi);
          font-family: 'Work Sans', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.85rem 1.6rem;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .a-btn:hover { background: var(--gold-soft); transform: translateY(-1px); }
        .a-btn:focus-visible { outline: 2px solid var(--sand); outline-offset: 3px; }

        .a-vine-decor {
          position: absolute;
          right: -2rem;
          top: -3rem;
          width: 16rem;
          height: 16rem;
          opacity: 0.5;
          z-index: 1;
        }

        .a-body {
          max-width: 46rem;
          margin: 0 auto;
          padding: 3.5rem 1.5rem 5rem;
        }

        .a-intro {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          font-size: 1.3rem;
          line-height: 1.5;
          color: var(--tulsi);
          margin: 0 0 3rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(124,144,112,0.3);
        }

        .a-faq-list {
          position: relative;
          padding-left: 2.6rem;
        }

        .a-vine-line {
          position: absolute;
          left: 0.85rem;
          top: 0.6rem;
          bottom: 0.6rem;
          width: 2px;
          background: repeating-linear-gradient(
            to bottom,
            rgba(124,144,112,0.35) 0,
            rgba(124,144,112,0.35) 6px,
            transparent 6px,
            transparent 12px
          );
        }

        .a-faq-item {
          position: relative;
          border-bottom: 1px solid rgba(124,144,112,0.25);
        }
        .a-faq-item:first-child { border-top: 1px solid rgba(124,144,112,0.25); }

        .a-leaf-marker {
          position: absolute;
          left: -2.6rem;
          top: 1.35rem;
          width: 1.7rem;
          height: 1.7rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: var(--sand-2);
          color: var(--sage);
          transform: scale(1) rotate(0deg);
          transition: transform 0.35s ease, color 0.35s ease, background 0.35s ease;
        }
        .a-faq-item.open .a-leaf-marker {
          color: var(--gold);
          background: #FFF9EC;
          transform: scale(1.18) rotate(-18deg);
        }

        .a-faq-q {
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1.1rem 0.25rem;
          font-family: 'Fraunces', serif;
          font-weight: 500;
          font-size: 1.08rem;
          color: var(--ink);
        }
        .a-faq-q:focus-visible { outline: 2px solid var(--sage); outline-offset: 4px; border-radius: 4px; }

        .a-chevron {
          flex-shrink: 0;
          color: var(--sage);
          transition: transform 0.3s ease;
        }
        .a-faq-item.open .a-chevron { transform: rotate(180deg); color: var(--gold); }

        .a-faq-a {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s ease;
        }
        .a-faq-item.open .a-faq-a { grid-template-rows: 1fr; }

        .a-faq-a-inner {
          overflow: hidden;
        }
        .a-faq-a-inner p {
          margin: 0 0 1.3rem;
          padding-right: 1rem;
          line-height: 1.65;
          color: #45513f;
          font-size: 0.98rem;
        }

        .a-footer-cta {
          margin-top: 3.5rem;
          padding: 2.25rem 2rem;
          border-radius: 1.25rem;
          background: linear-gradient(135deg, #EFE7D2, #F7F2E5);
          border: 1px solid rgba(201,154,59,0.35);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
        }

        .a-footer-cta p {
          margin: 0;
          font-family: 'Fraunces', serif;
          font-size: 1.15rem;
          color: var(--tulsi);
          max-width: 26ch;
        }

        .a-footer-brand {
          margin-top: 3rem;
          text-align: center;
          font-size: 0.8rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--sage);
        }

        @media (max-width: 560px) {
          .a-faq-list { padding-left: 2.2rem; }
          .a-leaf-marker { left: -2.2rem; width: 1.5rem; height: 1.5rem; }
          .a-footer-cta { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

     

      <main className="a-body">
        <p className="a-intro">A few things worth knowing before you say yes to Ayurveda.</p>

        <div className="a-faq-list">
          <div className="a-vine-line" aria-hidden="true" />
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div className={`a-faq-item${isOpen ? ' open' : ''}`} key={item.q}>
                <span className="a-leaf-marker" aria-hidden="true">
                  <Leaf size={14} />
                </span>
                <button
                  className="a-faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <ChevronDown className="a-chevron" size={19} />
                </button>
                <div className="a-faq-a">
                  <div className="a-faq-a-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="a-footer-cta">
          <p>Ready to talk through your concerns with Dr. Princy?</p>
          <a className="a-btn" id="book" href="/booking">
            <Calendar size={17} />
            Book a Consultation
          </a>
        </div>

        <p className="a-footer-brand">ARAYAL \u2014 Ayurveda, brought to your home</p>
      </main>
    </div>
  )
}

export default Page