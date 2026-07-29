// "use client";
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function Header() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home"><img src="Arayal.png" alt="Arayal Logo" style={{ width: '150px' }} /></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Link href="/" style={{ textDecoration: 'none', marginRight: '15px' }}>
//               Home
//             </Link>
//             <Link href="/about" style={{ textDecoration: 'none', marginRight: '15px' }}>
//               About
//             </Link>
//             <Link href="/services" style={{ textDecoration: 'none', marginRight: '15px' }}>
//               Service
//             </Link>
//             <Link href="/doctor" style={{ textDecoration: 'none', marginRight: '15px' }}>
//               Doctor
//             </Link>
//             <Link href="/consultation" style={{ textDecoration: 'none', marginRight: '15px' }}>
//               Consultation
//             </Link>
//             <Link href="/faq" style={{ textDecoration: 'none', marginRight: '15px' }}>
//               FAQ
//             </Link>
//             <Link href="/contact" style={{ textDecoration: 'none', marginRight: '15px' }}>
//               Contact
//             </Link>
//             <Button variant="primary" href="/booking" style={{ marginLeft: '15px' }}>
//               Book Appointment
//             </Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;


"use client";
import Link from 'next/link';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-display',
});

const body = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Service' },
  { href: '/doctor', label: 'Doctor' },
  { href: '/consultation', label: 'Consultation' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

function Header() {
  return (
    <Navbar expand="lg" className={`site-header ${display.variable} ${body.variable}`}>
      <Container className="header-container">
        <Navbar.Brand href="/" className="brand">
          <img src="/Arayal.png" alt="Arayal Logo" className="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />

        <Navbar.Collapse id="basic-navbar-nav" className="collapse-right">
          <Nav className="ms-lg-auto nav-links">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="nav-link">
                {label}
              </Link>
            ))}
            <Link href="/booking" className="book-btn">
              Book Appointment
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style jsx global>{`
        .site-header {
          /* Ayurveda-inspired palette: bark/wood brown, turmeric gold,
             kumkum terracotta-red, sandalwood cream, tulsi green (used sparingly) */
          --bark: #3d2b1f;
          --bark-deep: #2c1f16;
          --turmeric: #d99a34;
          --kumkum: #a8422e;
          --sandalwood: #f4ecd8;
          --nav-text: #ecd9b4;
          --tulsi: #5c6e4f;

          background: linear-gradient(180deg, var(--bark) 0%, var(--bark-deep) 100%);
          padding: 0.6rem 0;
          border-bottom: 2px solid var(--turmeric);
          font-family: var(--font-body), sans-serif;
        }

        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          margin-right: 0;
        }

        .logo {
          height: 100px;
          width: auto;
          filter: brightness(0) invert(1);
        }

        .toggle {
          border-color: rgba(244, 236, 216, 0.4) !important;
        }

        .collapse-right {
          flex-grow: 0;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          height: 100%;
          position: relative;
          font-family: var(--font-body), sans-serif;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: var(--nav-text);
          text-decoration: none;
          padding: 0.5rem 0.85rem;
          transition: color 0.2s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0.25rem;
          width: 0%;
          height: 2px;
          background: var(--turmeric);
          transition: width 0.28s ease, left 0.28s ease;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .nav-link:hover::after {
          width: 60%;
          left: 20%;
        }

        .book-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display), serif;
          font-weight: 600;
          font-size: 1.05rem;
          letter-spacing: 0.01em;
          color: var(--sandalwood);
          text-decoration: none;
          background: var(--kumkum);
          border: 1px solid var(--kumkum);
          border-radius: 2px;
          padding: 0.45rem 1.3rem;
          margin-left: 0.9rem;
          line-height: 1.2;
          transition: background 0.2s ease, transform 0.15s ease;
        }

        .book-btn:hover {
          background: #c14f37;
          color: #ffffff;
          transform: translateY(-1px);
        }

        @media (max-width: 991px) {
          .header-container {
            flex-wrap: wrap;
          }
          .nav-links {
            align-items: flex-start;
            flex-direction: column;
            padding-top: 0.75rem;
          }
          .nav-link {
            padding: 0.6rem 0;
            height: auto;
          }
          .book-btn {
            margin-left: 0;
            margin-top: 0.5rem;
            display: inline-flex;
          }
        }
      `}</style>
    </Navbar>
  );
}

export default Header;