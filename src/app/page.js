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
"use client"
import Link from "next/link";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Image from "next/image";

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

const features = [
  {
    icon: "🌿",
    title: "Holistic Approach",
    text: "Ayurveda looks at overall wellbeing rather than focusing only on individual concerns.",
  },
  {
    icon: "👩‍⚕️",
    title: "Expert Guidance",
    text: "Receive personalized guidance from Dr. Princy based on your individual needs.",
  },
  {
    icon: "💻",
    title: "Easy Online Access",
    text: "Consult from the comfort of your home through a convenient online process.",
  },
  {
    icon: "🥗",
    title: "Personalized Recommendations",
    text: "Receive practical guidance related to diet, lifestyle, and wellness.",
  },
  {
    icon: "🔄",
    title: "Continued Support",
    text: "Follow-up consultations help you stay connected throughout your wellness journey.",
  },
  {
    icon: "☯️",
    title: "Natural Wellness Philosophy",
    text: "Discover traditional approaches that encourage balance between body, mind, and lifestyle.",
  },
];

export default function Home() {
  return (
    <div className={`page ${display.variable} ${body.variable}`}>
      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <span className="eyebrow">🌿 Trusted Ayurveda Consultation</span>
          <h1>
            Heal Naturally.
            <br />
            <span className="accent">Live Better with Ayurveda.</span>
          </h1>
          <p className="hero-sub">
            Traditional Ayurvedic wisdom, guided by Dr. Princy, brought to
            you wherever you are — for balance in body, mind, and daily
            life.
          </p>
          <div className="hero-actions">
            <Link href="/booking" className="btn-primary">
              Book a Consultation
            </Link>
            <Link href="/doctor" className="btn-secondary">
              Meet Dr. Princy →
            </Link>
          </div>
        </div>

        <div className="hero-art">
  <Image
    src="/Ayurvedic-herb.jpg"
    alt="Ayurvedic herbs and oils used in traditional treatment"
    width={480}
    height={480}
    className="hero-img"
    priority
  />
</div>
      </section>

      {/* Why choose */}
      <section className="intro">
        <h2>Why Choose ARAYAL?</h2>
        <p>
          A personalized approach to Ayurveda designed around your wellness
          journey.
        </p>
      </section>

      {/* Features */}
      <section className="features">
        {features.map((f) => (
          <div className="feature-card" key={f.title}>
            <span className="feature-icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </section>

      {/* CTA banner */}
      <section className="cta-banner">
        <h2>Ready to begin your wellness journey?</h2>
        <p>Take the first step toward balance, guided by Ayurvedic care.</p>
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

        .page {
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

        /* Hero */
        .hero {
          display: flex;
          align-items: center;
          gap: 3rem;
          max-width: 1140px;
          margin: 0 auto;
          padding: 4.5rem 1.5rem 4rem;
        }

        .hero-text {
          flex: 1.1;
        }

        .hero h1 {
          font-family: var(--font-display), serif;
          font-size: 3.4rem;
          line-height: 1.15;
          font-weight: 600;
          margin: 0 0 1.2rem;
          color: var(--leaf-green);
        }

        .hero h1 .accent {
          color: var(--turmeric);
        }

        .hero-sub {
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 480px;
          color: #4a4a40;
          margin-bottom: 1.8rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
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
          transition: background 0.2s ease, transform 0.15s ease;
        }

        .btn-primary:hover {
          background: #d99b3f;
          transform: translateY(-1px);
        }

        .btn-secondary {
          font-weight: 500;
          font-size: 1rem;
          color: var(--leaf-green);
          text-decoration: none;
          padding: 0.7rem 0.4rem;
          align-self: center;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
        }

        .btn-secondary:hover {
          border-color: var(--turmeric);
        }

        .hero-art {
  flex: 1;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(47, 74, 52, 0.18);
}
  .hero-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}

        /* Intro */
        .intro {
          text-align: center;
          max-width: 640px;
          margin: 2rem auto 3rem;
          padding: 0 1.5rem;
        }

        .intro h2 {
          font-family: var(--font-display), serif;
          font-size: 2.2rem;
          color: var(--leaf-green);
          margin-bottom: 0.6rem;
        }

        .intro p {
          font-size: 1.05rem;
          color: #57574c;
        }

        /* Features */
        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 1.5rem 4.5rem;
        }

        .feature-card {
          background: var(--sandalwood);
          border-top: 3px solid var(--turmeric);
          border-radius: 4px;
          padding: 1.8rem 1.6rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .feature-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(47, 74, 52, 0.12);
        }

        .feature-icon {
          font-size: 1.7rem;
          display: block;
          margin-bottom: 0.6rem;
        }

        .feature-card h3 {
          font-family: var(--font-display), serif;
          font-size: 1.3rem;
          color: var(--leaf-green);
          margin: 0 0 0.5rem;
        }

        .feature-card p {
          font-size: 0.95rem;
          line-height: 1.55;
          color: #4a4a40;
          margin: 0;
        }

        /* CTA banner */
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

        /* Responsive */
        @media (max-width: 900px) {
          .hero {
            flex-direction: column;
            text-align: center;
            padding-top: 3rem;
          }
          .hero-sub {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions {
            justify-content: center;
          }
          .features {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .hero h1 {
            font-size: 2.4rem;
          }
          .features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}