// "use client"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Page() {
//   return (
//     <div>
//     <h1>Our Ayurvedic Services</h1>
//     <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
//         <div>
//             <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Online Ayurveda Consultation</Card.Title>
//         <Card.Text>
//           Connect with Dr. Princy through a convenient online consultation to discuss your health concerns, lifestyle, and wellness goals.
//         </Card.Text>
//         <Button variant="primary">Book Consultation</Button>
//       </Card.Body>
//     </Card>
//         </div>
//         <div>
//             <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Ayurvedic Diet Consultation</Card.Title>
//         <Card.Text>
//           Receive personalized dietary guidance based on Ayurvedic principles to help you develop healthier and more balanced eating habits.
//         </Card.Text>
//         <Button variant="primary">Learn More</Button>
//       </Card.Body>
//     </Card>
//         </div>
//         <div>
//             <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Lifestyle Guidance</Card.Title>
//         <Card.Text>
//           Discover practical Ayurvedic lifestyle recommendations designed to support daily balance, healthy routines, rest, and overall wellbeing.
//         </Card.Text>
//         <Button variant="primary">Explore Guidance</Button>
//       </Card.Body>
//     </Card>
//         </div>
//         <div>
//             <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Herbal Wellness Support</Card.Title>
//         <Card.Text>
//           Explore traditional Ayurvedic herbal approaches with guidance tailored to your individual wellness requirements.
//         </Card.Text>
//         <Button variant="primary">Learn More</Button>
//       </Card.Body>
//     </Card>
//         </div>
//         <div>
//             <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>Follow-up Consultation</Card.Title>
//         <Card.Text>
//           Continue your wellness journey with follow-up consultations to discuss your progress and adjust your personalized guidance when appropriate.
//         </Card.Text>
//         <Button variant="primary">Continue Your Care</Button>
//       </Card.Body>
//     </Card>
//         </div>
//     </div>
//     </div>
//   );
// }

// export default Page;

"use client";
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

const services = [
  {
    img: "/dr.jpg",
    title: "Online Ayurveda Consultation",
    text: "Connect with Dr. Princy through a convenient online consultation to discuss your health concerns, lifestyle, and wellness goals.",
    cta: "Book Consultation",
    href: "/booking",
  },
  {
    img: "/diet.jpg",
    title: "Ayurvedic Diet Consultation",
    text: "Receive personalized dietary guidance based on Ayurvedic principles to help you develop healthier and more balanced eating habits.",
    cta: "Learn More",
    href: "/contact",
  },
  {
    img: "/yoga.webp",
    title: "Lifestyle Guidance",
    text: "Discover practical Ayurvedic lifestyle recommendations designed to support daily balance, healthy routines, rest, and overall wellbeing.",
    cta: "Explore Guidance",
    href: "/contact",
  },
  {
    img: "/herbal.jpg",
    title: "Herbal Wellness Support",
    text: "Explore traditional Ayurvedic herbal approaches with guidance tailored to your individual wellness requirements.",
    cta: "Learn More",
    href: "/contact",
  },
  {
    img: "/panch.webp",
    title: "Panchakarma & Detox Guidance",
    text: "Learn about traditional Ayurvedic detox practices that support the body's natural cleansing rhythms, guided appropriately for your constitution.",
    cta: "Learn More",
    href: "/contact",
  },
  {
    img: "/followup.jpeg",
    title: "Follow-up Consultation",
    text: "Continue your wellness journey with follow-up consultations to discuss your progress and adjust your personalized guidance when appropriate.",
    cta: "Continue Your Care",
    href: "/booking",
  },
];

const steps = [
  { step: "01", title: "Book Online", text: "Choose a time that suits you — no travel required." },
  { step: "02", title: "Consult", text: "Discuss your concerns, habits, and goals with Dr. Princy." },
  { step: "03", title: "Receive Guidance", text: "Get a personalized plan rooted in Ayurvedic principles." },
];

function Page() {
  return (
    <div className={`services-page ${display.variable} ${body.variable}`}>
      <section className="intro">
        <span className="eyebrow">🌿 Our Services</span>
        <h1>Our Ayurvedic Services</h1>
        <p>
          From first consultation to ongoing care, every service is guided
          by traditional Ayurvedic principles and shaped around your
          individual needs.
        </p>
      </section>

      <section className="services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <div className="service-img-wrap">
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                className="service-img"
              />
            </div>
            <div className="service-body">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <Link href={s.href} className="service-btn">
                {s.cta}
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.step}>
              <span className="step-number">{s.step}</span>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <h2>Not sure where to start?</h2>
        <p>Book an initial consultation and we&apos;ll guide you from there.</p>
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

        .services-page {
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

        .intro {
          max-width: 680px;
          margin: 0 auto;
          padding: 4.5rem 1.5rem 2.5rem;
          text-align: center;
        }

        .intro h1 {
          font-family: var(--font-display), serif;
          font-size: 2.8rem;
          font-weight: 600;
          color: var(--leaf-green);
          margin: 0 0 1rem;
        }

        .intro p {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #4a4a40;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.6rem;
          max-width: 1140px;
          margin: 0 auto;
          padding: 1rem 1.5rem 4.5rem;
        }

        .service-card {
          background: #ffffff;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(47, 74, 52, 0.08);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(47, 74, 52, 0.14);
        }

        .service-img-wrap {
          position: relative;
          width: 100%;
          height: 170px;
          background: var(--sandalwood);
        }

        .service-img {
          object-fit: cover;
        }

        .service-body {
          padding: 1.5rem 1.5rem 1.8rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .service-body h3 {
          font-family: var(--font-display), serif;
          font-size: 1.3rem;
          color: var(--leaf-green);
          margin: 0 0 0.6rem;
        }

        .service-body p {
          font-size: 0.95rem;
          line-height: 1.55;
          color: #4a4a40;
          margin: 0 0 1.3rem;
          flex: 1;
        }

        .service-btn {
          align-self: flex-start;
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--ink);
          background: var(--turmeric);
          border: 1px solid var(--turmeric);
          border-radius: 2px;
          padding: 0.5rem 1.2rem;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.15s ease;
        }

        .service-btn:hover {
          background: #d99b3f;
          transform: translateY(-1px);
        }

        .how-it-works {
          background: var(--sandalwood);
          padding: 4rem 1.5rem;
          text-align: center;
        }

        .how-it-works h2 {
          font-family: var(--font-display), serif;
          font-size: 2.1rem;
          color: var(--leaf-green);
          margin: 0 0 2.5rem;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.6rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .step {
          background: #fffdf8;
          border-radius: 6px;
          padding: 1.8rem 1.4rem;
        }

        .step-number {
          font-family: var(--font-display), serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--turmeric);
          display: block;
          margin-bottom: 0.4rem;
        }

        .step h4 {
          font-family: var(--font-display), serif;
          font-size: 1.15rem;
          color: var(--leaf-green);
          margin: 0 0 0.4rem;
        }

        .step p {
          font-size: 0.92rem;
          line-height: 1.5;
          color: #4a4a40;
          margin: 0;
        }

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

        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .steps {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .intro h1 {
            font-size: 2.1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Page;