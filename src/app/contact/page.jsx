// "use client"
// import { Container, Row, Col } from "react-bootstrap";

// function Page() {
    
//   return (
//     <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
//         <div>
//       <section className="bg-white py-5">
//       <Container>
//         <h2 className="fw-bold mb-3">Connect With Arayal</h2>

//         <p className="text-muted mb-4">
//           Have questions or want to begin your Ayurveda journey? Get in touch with us.
//         </p>

//         <Row className="g-3">
//           {/* Name */}
//           <Col xs={12} className="d-flex align-items-center gap-2">
//             <span>👤</span>
//             <p className="mb-0">Dr. Princy</p>
//           </Col>

//           {/* Phone */}
//           <Col xs={12} className="d-flex align-items-center gap-2">
//             <span>📞</span>
//             <a href="tel:+91 97441 59863" className="text-primary text-decoration-none">
//               +91 97441 59863
//             </a>
//           </Col>

//           {/* Email */}
//           <Col xs={12} className="d-flex align-items-center gap-2">
//             <span>📧</span>
//             <a href="mailto:hello@arayal.com" className="text-primary text-decoration-none">
//               hello@arayal.com
//             </a>
//           </Col>

//           {/* Location */}
//           <Col xs={12} className="d-flex align-items-center gap-2">
//             <span>📍</span>
//             <p className="mb-0">Kerala, India</p>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//     </div>
//     <div>
//         <p className="text-muted small text-center mb-0"> 🌿 <strong>Note:</strong> The information provided on this website is intended for general wellness and educational purposes. Online consultation does not replace emergency medical care or diagnosis from a qualified healthcare professional. </p>
//     </div>
//     </div>
//   )
// }

// export default Page





'use client'

import React from 'react'
import { User, Phone, Mail, MapPin, Leaf } from 'lucide-react'

const contactItems = [
  { icon: User, label: 'Practitioner', value: 'Dr. Princy', href: null },
  { icon: Phone, label: 'Phone', value: '+91 97441 59863', href: 'tel:+919744159863' },
  { icon: Mail, label: 'Email', value: 'hello@arayal.com', href: 'mailto:hello@arayal.com' },
  { icon: MapPin, label: 'Location', value: 'Kerala, India', href: null },
]

function Page() {
  return (
    <div className="c-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600&display=swap');

        .c-page {
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
          font-family: 'Work Sans', sans-serif;
          color: var(--ink);
          min-height: 100vh;
          padding: 4rem 1.25rem;
          display: flex;
          justify-content: center;
        }
        .c-page * { box-sizing: border-box; }

        .c-wrap {
          width: 100%;
          max-width: 40rem;
        }

        .c-card {
          position: relative;
          background: linear-gradient(180deg, var(--tulsi) 0%, var(--tulsi-2) 100%);
          color: var(--sand);
          border-radius: 1.5rem;
          padding: 3rem 2.25rem;
          overflow: hidden;
        }

        .c-vine-decor {
          position: absolute;
          right: -1.5rem;
          top: -2rem;
          width: 11rem;
          height: 11rem;
          opacity: 0.5;
          pointer-events: none;
        }

        .c-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold-soft);
          margin-bottom: 1rem;
        }

        .c-card h2 {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: clamp(1.75rem, 4vw, 2.3rem);
          margin: 0 0 0.75rem;
          position: relative;
          z-index: 2;
        }

        .c-card > p.c-sub {
          color: rgba(246,239,222,0.75);
          font-size: 1rem;
          line-height: 1.6;
          max-width: 34ch;
          margin: 0 0 2.25rem;
          position: relative;
          z-index: 2;
        }

        .c-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          position: relative;
          z-index: 2;
        }

        .c-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.9rem 0.25rem;
          border-top: 1px solid rgba(246,239,222,0.12);
        }
        .c-item:first-child { border-top: none; }

        .c-icon-badge {
          flex-shrink: 0;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 999px;
          background: rgba(201,154,59,0.16);
          border: 1px solid rgba(201,154,59,0.4);
          color: var(--gold-soft);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .c-item-text { display: flex; flex-direction: column; gap: 0.1rem; }

        .c-item-label {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(246,239,222,0.5);
        }

        .c-item-value {
          font-size: 1.02rem;
          color: var(--sand);
        }

        a.c-item-value {
          text-decoration: none;
          transition: color 0.2s ease;
        }
        a.c-item-value:hover { color: var(--gold-soft); }
        a.c-item-value:focus-visible { outline: 2px solid var(--gold-soft); outline-offset: 3px; border-radius: 3px; }

        .c-quote {
          margin-top: 2.25rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(246,239,222,0.12);
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-weight: 400;
          font-size: 0.95rem;
          color: rgba(246,239,222,0.65);
          position: relative;
          z-index: 2;
        }

        .c-disclaimer {
          margin-top: 1.75rem;
          background: #FFF9EC;
          border: 1px solid rgba(201,154,59,0.35);
          border-radius: 1.25rem;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .c-disclaimer svg {
          flex-shrink: 0;
          color: var(--sage);
          margin-top: 0.15rem;
        }

        .c-disclaimer p {
          margin: 0;
          font-size: 0.85rem;
          line-height: 1.55;
          color: #4a5643;
        }

        .c-disclaimer strong { color: var(--ink); }

        @media (max-width: 480px) {
          .c-card { padding: 2.25rem 1.5rem; }
        }
      `}</style>

      <div className="c-wrap">
        <div className="c-card">
          <svg className="c-vine-decor" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M170 10 C150 40, 160 70, 130 90 C100 110, 110 140, 80 160 C60 175, 55 185, 40 195" stroke="#C99A3B" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
            <ellipse cx="150" cy="35" rx="9" ry="16" fill="#C99A3B" opacity="0.35" transform="rotate(35 150 35)" />
            <ellipse cx="118" cy="98" rx="8" ry="14" fill="#C99A3B" opacity="0.3" transform="rotate(-10 118 98)" />
          </svg>

          <span className="c-eyebrow"><Leaf size={13} /> Get in Touch</span>
          <h2>Connect with Arayal</h2>
          <p className="c-sub">Have questions, or ready to begin your Ayurveda journey? We're here to help.</p>

          <div className="c-list">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div className="c-item" key={label}>
                <span className="c-icon-badge"><Icon size={17} /></span>
                <div className="c-item-text">
                  <span className="c-item-label">{label}</span>
                  {href ? (
                    <a className="c-item-value" href={href}>{value}</a>
                  ) : (
                    <span className="c-item-value">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="c-quote">"When diet is right, medicine is of no need. When diet is wrong, medicine is of no use." \u2014 an old Ayurvedic saying</p>
        </div>

        <div className="c-disclaimer">
          <Leaf size={18} />
          <p>
            <strong>Note:</strong> The information provided on this website is intended for general wellness and educational purposes. Online consultation does not replace emergency medical care or diagnosis from a qualified healthcare professional.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page