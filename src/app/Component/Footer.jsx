// import React from 'react'

// function Footer() {
//   return (
//     <div>
//       <div>
//         <img src="Arayal.png" alt="" style={{ width: '300px', height: 'auto' }} />
//         <h4>Traditional wisdom. Personalized wellness.</h4>
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
//       <div>
//         <h3>Quick Links</h3>
//         <ul>
//             <a href="/"><li>Home</li></a>
//             <a href="/about"><li>About</li></a>
//             <a href="/services"><li>Services</li></a>
//             <a href="/doctor"><li>Doctor</li></a>
//             <a href="/consultation"><li>Consultation</li></a>
//             <a href="/faq"><li>FAQ</li></a>
//             <a href="/contact"><li>Contact</li></a>
//         </ul>
//       </div>
//       <div>
//         <h3>Services</h3>
//         <ul>
//             <li>Online Consultation</li>
//             <li>Diet Consultation</li>
//             <li>Lifestyle Guidance</li>
//             <li>Herbal Wellness Support</li>
//             <li>Follow-up Consultation</li>
//         </ul>
//       </div>
//       <div>
//         <h3>Contact Us</h3>
//         <p>Ramath, Purameri, Kozhikode 673503</p>
//         <p>Phone: 97441 59863</p>
//         <p>Email: princyarayal@gmail.com</p>
//       </div>
//     </div>
//     <p>© 2026 ARAYAL Ayurveda. All rights reserved.</p>
//     </div>
    
//   )
// }

// export default Footer

import React from 'react'
import { Phone, Mail, MapPin, Leaf } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Doctor', href: '/doctor' },
  { label: 'Consultation', href: '/consultation' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const services = [
  'Online Consultation',
  'Diet Consultation',
  'Lifestyle Guidance',
  'Herbal Wellness Support',
  'Follow-up Consultation',
]

function Footer() {
  return (
    <footer className="f-footer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600&display=swap');

        .f-footer {
          --sand: #F6EFDE;
          --tulsi: #17241A;
          --tulsi-2: #1E2F1D;
          --gold: #C99A3B;
          --gold-soft: #E4C77E;
          --sage: #7C9070;

          background: linear-gradient(180deg, var(--tulsi) 0%, var(--tulsi-2) 100%);
          color: rgba(246,239,222,0.75);
          font-family: 'Work Sans', sans-serif;
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .f-footer * {
          box-sizing: border-box;
        }

        .f-vine-top {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--gold) 20%,
            var(--gold-soft) 50%,
            var(--gold) 80%,
            transparent
          );
          opacity: 0.7;
        }

        .f-inner {
          width: 100%;
          max-width: 128rem;
          margin: 0 auto;
          padding: 0 50px;
        }

        .f-brand {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          flex-wrap: wrap;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(246,239,222,0.1);
          height: 100px;
        }

        .f-brand img {
          width: 20rem;
          height: 150px;
          max-width: 100%;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.92;
          margin-bottom: 20px;
        }

        .f-brand-text {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-weight: 500;
          font-size: 1.05rem;
          color: var(--gold-soft);
          margin: 0;
        }

        .f-cols {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          padding: 2.75rem 0 2.5rem;
          margin-left: 90px;
        }

        .f-col {
          min-width: 0;
        }

        .f-col h3 {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: 1rem;
          color: var(--sand);
          margin: 0 0 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .f-col h3 svg {
          color: var(--gold);
          flex-shrink: 0;
        }

        .f-col ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .f-col ul li {
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .f-col a {
          color: rgba(246,239,222,0.75);
          text-decoration: none;
          transition: color 0.2s ease;
          overflow-wrap: anywhere;
        }

        .f-col a:hover {
          color: var(--gold-soft);
        }

        .f-col a:focus-visible {
          outline: 2px solid var(--gold-soft);
          outline-offset: 2px;
          border-radius: 2px;
        }

        .f-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
          font-size: 0.92rem;
          line-height: 1.5;
          margin-bottom: 0.75rem;
        }

        .f-contact-item svg {
          flex-shrink: 0;
          color: var(--gold);
          margin-top: 0.2rem;
        }

        .f-contact-item a {
          color: rgba(246,239,222,0.75);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .f-contact-item a:hover {
          color: var(--gold-soft);
        }

        .f-bottom {
          border-top: 1px solid rgba(246,239,222,0.1);
          padding: 1.5rem 20px;
          text-align: center;
          font-size: 0.8rem;
          color: rgba(246,239,222,0.5);
          line-height: 1.5;
        }


        /* =========================
           TABLET
        ========================= */

        @media (max-width: 992px) {

          .f-inner {
            padding: 0 35px;
          }

          .f-cols {
            margin-left: 30px;
            gap: 2rem;
          }

          .f-brand img {
            width: 17rem;
            height: 140px;
          }
        }


        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 720px) {

          .f-inner {
            padding: 0 20px;
          }

          .f-brand {
            height: auto;
            min-height: 120px;
            padding: 1rem 0 1.5rem;
            justify-content: center;
          }

          .f-brand img {
            width: min(18rem, 90vw);
            height: 120px;
            margin-bottom: 0;
          }

          .f-cols {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem 0;
            margin-left: 0;
          }

          .f-col {
            width: 100%;
          }

          .f-col h3 {
            font-size: 1rem;
            margin-bottom: 0.9rem;
          }

          .f-col ul {
            gap: 0.55rem;
          }

          .f-col ul li {
            font-size: 0.9rem;
          }

          .f-contact-item {
            font-size: 0.9rem;
          }

          .f-bottom {
            padding: 1.2rem 15px;
            font-size: 0.75rem;
          }
        }


        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 400px) {

          .f-inner {
            padding: 0 15px;
          }

          .f-brand img {
            width: 100%;
            height: 105px;
          }

          .f-cols {
            gap: 1.75rem;
            padding-top: 1.75rem;
          }

          .f-col ul li,
          .f-contact-item {
            font-size: 0.85rem;
          }

          .f-bottom {
            font-size: 0.7rem;
          }
        }
      `}</style>


      <div className="f-inner">

        <div className="f-brand">
          <img src="Arayal.png" alt="Arayal Ayurveda" />
        </div>

        <div className="f-cols">

          <div className="f-col">
            <h3>
              <Leaf size={15} /> Quick Links
            </h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>


          <div className="f-col">
            <h3>
              <Leaf size={15} /> Services
            </h3>

            <ul>
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>


          <div className="f-col">
            <h3>
              <Leaf size={15} /> Contact Us
            </h3>

            <div className="f-contact-item">
              <MapPin size={16} />
              <span>Ramath, Purameri, Kozhikode 673503</span>
            </div>

            <div className="f-contact-item">
              <Phone size={16} />
              <a href="tel:+919744159863">
                97441 59863
              </a>
            </div>

            <div className="f-contact-item">
              <Mail size={16} />
              <a href="mailto:princyarayal@gmail.com">
                princyarayal@gmail.com
              </a>
            </div>
          </div>

        </div>
      </div>


      <div className="f-bottom">
        © 2026 ARAYAL Ayurveda. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer