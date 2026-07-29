// "use client"
// import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function Page() {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         date: "",
//         message: "",
//       });
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
    
//         setFormData({
//           ...formData,
//           [name]: value,
//         });
//       };
    
//       const handleSubmit = (e) => {
//       e.preventDefault();
    
//       const whatsappNumber = "919562612834";
    
//       const message = `Hello Dr. Princy,
    
//     I would like to book an Ayurveda consultation.
    
//     Full Name: ${formData.name}
//     Email Address: ${formData.email}
//     Phone Number: ${formData.phone}
//     Preferred Date: ${formData.date}
    
//     Message:
//     ${formData.message}`;
    
//       const whatsappURL =
//         `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
//       window.location.href = whatsappURL;
//     };
//   return (
//     <div>
//       <div style={{ marginTop: "30px" }}>
//       <h1>Contact Form</h1>

//       <Form onSubmit={handleSubmit}>

//         <Form.Group className="mb-3" controlId="fullName">
//           <Form.Label>Full Name</Form.Label>

//           <Form.Control
//             type="text"
//             name="name"
//             placeholder="Enter full name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="email">
//           <Form.Label>Email Address</Form.Label>

//           <Form.Control
//             type="email"
//             name="email"
//             placeholder="Enter email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="phone">
//           <Form.Label>Phone Number</Form.Label>

//           <Form.Control
//             type="tel"
//             name="phone"
//             placeholder="Enter phone number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="date">
//           <Form.Label>Preferred Date</Form.Label>

//           <Form.Control
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="message">
//           <Form.Label>Message</Form.Label>

//           <Form.Control
//             as="textarea"
//             name="message"
//             placeholder="Enter your message"
//             rows={3}
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>

//       </Form>
//     </div>
//     </div>
//   )
// }

// export default Page


'use client'

import React, { useState } from 'react'
import { Leaf, Calendar } from 'lucide-react'

function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const whatsappNumber = '919562612834'

    const message = `Hello Dr. Princy,

I would like to book an Ayurveda consultation.

Full Name: ${formData.name}
Email Address: ${formData.email}
Phone Number: ${formData.phone}
Preferred Date: ${formData.date}

Message:
${formData.message}`

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.location.href = whatsappURL
  }

  return (
    <div className="b-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600&display=swap');

        .b-page {
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
        .b-page * { box-sizing: border-box; }

        .b-wrap { width: 100%; max-width: 34rem; }

        .b-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--sage);
          margin-bottom: 0.9rem;
        }

        .b-wrap h1 {
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: clamp(1.75rem, 4vw, 2.25rem);
          margin: 0 0 0.6rem;
          color: var(--tulsi);
        }

        .b-sub {
          color: #566150;
          font-size: 0.98rem;
          line-height: 1.6;
          margin: 0 0 2.25rem;
          max-width: 40ch;
        }

        .b-card {
          background: #FFFEFB;
          border: 1px solid rgba(124,144,112,0.25);
          border-radius: 1.25rem;
          padding: 2rem 1.85rem 2.25rem;
          position: relative;
          overflow: hidden;
        }

        .b-vine-decor {
          position: absolute;
          right: -1.75rem;
          top: -1.75rem;
          width: 8rem;
          height: 8rem;
          opacity: 0.35;
          pointer-events: none;
        }

        .b-group {
          position: relative;
          z-index: 1;
          margin-bottom: 1.4rem;
        }

        .b-label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--sage);
          margin-bottom: 0.5rem;
        }

        .b-input,
        .b-textarea {
          width: 100%;
          background: var(--sand-2);
          border: 1px solid rgba(124,144,112,0.35);
          border-radius: 0.7rem;
          padding: 0.75rem 0.9rem;
          font-family: 'Work Sans', sans-serif;
          font-size: 0.98rem;
          color: var(--ink);
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .b-input::placeholder,
        .b-textarea::placeholder { color: #9aa593; }

        .b-input:focus,
        .b-textarea:focus {
          outline: none;
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(201,154,59,0.18);
        }

        .b-textarea { resize: vertical; min-height: 5rem; }

        .b-submit {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          background: var(--tulsi);
          color: var(--sand);
          font-family: 'Work Sans', sans-serif;
          font-weight: 600;
          font-size: 0.98rem;
          padding: 0.9rem 1.5rem;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: background 0.2s ease, transform 0.2s ease;
          position: relative;
          z-index: 1;
        }
        .b-submit:hover { background: #223421; transform: translateY(-1px); }
        .b-submit:focus-visible { outline: 2px solid var(--gold); outline-offset: 3px; }

        .b-note {
          margin-top: 1.25rem;
          font-size: 0.82rem;
          color: #7c8a74;
          text-align: center;
        }

        @media (max-width: 480px) {
          .b-card { padding: 1.75rem 1.25rem 2rem; }
        }
      `}</style>

      <div className="b-wrap">
        <span className="b-eyebrow"><Leaf size={13} /> Book a Consultation</span>
        <h1>Begin your Ayurveda journey</h1>
        <p className="b-sub">Share a few details below and we'll reach out on WhatsApp to confirm your consultation with Dr. Princy.</p>

        <div className="b-card">
          <svg className="b-vine-decor" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M170 10 C150 40, 160 70, 130 90 C100 110, 110 140, 80 160" stroke="#C99A3B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <ellipse cx="150" cy="35" rx="8" ry="14" fill="#C99A3B" opacity="0.4" transform="rotate(35 150 35)" />
          </svg>

          <form onSubmit={handleSubmit}>
            <div className="b-group">
              <label className="b-label" htmlFor="name">Full Name</label>
              <input
                className="b-input"
                type="text"
                id="name"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="b-group">
              <label className="b-label" htmlFor="email">Email Address</label>
              <input
                className="b-input"
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="b-group">
              <label className="b-label" htmlFor="phone">Phone Number</label>
              <input
                className="b-input"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="b-group">
              <label className="b-label" htmlFor="date">Preferred Date</label>
              <input
                className="b-input"
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="b-group">
              <label className="b-label" htmlFor="message">Message</label>
              <textarea
                className="b-textarea"
                id="message"
                name="message"
                placeholder="Tell us a little about your concerns"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="b-submit" type="submit">
              <Calendar size={17} />
              Send via WhatsApp
            </button>
          </form>
        </div>

        <p className="b-note">You'll be redirected to WhatsApp to confirm the details with Dr. Princy.</p>
      </div>
    </div>
  )
}

export default Page