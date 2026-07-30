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
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Service' },
  { href: '/doctor', label: 'Doctor' },
  { href: '/consultation', label: 'Consultation' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`ar-header ${scrolled ? 'ar-header-scrolled' : ''}`}>
      <div className="ar-inner">
        <Link href="/" className="ar-brand">
          <img src="Arayal.png" alt="Arayal Logo" className="ar-logo" />
        </Link>

        <button
          className="ar-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={open ? 'ar-bar1-open' : ''} />
          <span className={open ? 'ar-bar2-open' : ''} />
          <span className={open ? 'ar-bar3-open' : ''} />
        </button>

        <nav className={`ar-nav ${open ? 'ar-nav-open' : ''}`}>
          <div className="ar-links">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`ar-link ${active ? 'ar-link-active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <Link href="/booking" className="ar-cta" onClick={() => setOpen(false)}>
            Book Appointment
          </Link>
        </nav>
      </div>

      <style>{`
        .ar-header {
          --cream: #f6f1e3;
          --forest: #2f4a3d;
          --gold: #c08829;
          --clay: #a6472a;
          --hairline: #e3d9c0;

          background: var(--cream);
          border-bottom: 1px solid var(--hairline);
          position: sticky;
          top: 0;
          z-index: 50;
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .ar-header::after {
          content: '';
          display: block;
          height: 2px;
          background: linear-gradient(90deg, var(--gold) 0%, transparent 65%);
          opacity: 0.6;
        }

        .ar-header-scrolled {
          box-shadow: 0 6px 18px rgba(47, 74, 61, 0.08);
        }

        .ar-inner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        .ar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .ar-logo {
          width: 152px;
          height: 152px;
          object-fit: contain;
          display: block;
        }

        .ar-wordmark {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 1.5rem;
          line-height: 1;
          font-weight: 600;
          color: var(--forest);
          letter-spacing: 0.02em;
        }

        .ar-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
        }

        .ar-toggle span {
          width: 24px;
          height: 2px;
          background: var(--forest);
          display: block;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .ar-bar1-open {
          transform: translateY(7px) rotate(45deg);
        }
        .ar-bar2-open {
          opacity: 0;
        }
        .ar-bar3-open {
          transform: translateY(-7px) rotate(-45deg);
        }

        .ar-nav {
          display: flex;
          align-items: center;
          gap: 36px;
          height: 100%;
        }

        .ar-links {
          display: flex;
          align-items: center;
          gap: 26px;
          height: 100%;
        }

        .ar-link {
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
          text-decoration: none;
          color: var(--forest);
          font-family: 'Work Sans', Arial, sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.85;
          transition: opacity 0.2s ease;
        }

        .ar-link:hover {
          opacity: 1;
        }

        .ar-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 24px;
          height: 2px;
          width: 0%;
          background: var(--gold);
          transition: width 0.25s ease;
        }

        .ar-link:hover::after {
          width: 100%;
        }

        .ar-link-active {
          opacity: 1;
        }

        .ar-link-active::after {
          width: 100%;
          background: var(--clay);
        }

        .ar-cta {
          display: flex;
          align-items: center;
          text-decoration: none;
          background: var(--clay);
          color: var(--cream);
          font-family: 'Work Sans', Arial, sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0 20px;
          height: 42px;
          border-radius: 3px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .ar-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(166, 71, 42, 0.35);
          background: #954019;
        }

        @media (max-width: 900px) {
          .ar-toggle {
            display: flex;
          }

          .ar-nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            height: auto;
            background: var(--cream);
            border-bottom: 1px solid var(--hairline);
            box-shadow: 0 12px 20px rgba(47, 74, 61, 0.08);
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: 8px 24px 20px;
            display: none;
          }

          .ar-nav-open {
            display: flex;
          }

          .ar-links {
            flex-direction: column;
            align-items: flex-start;
            height: auto;
            gap: 4px;
          }

          .ar-link {
            height: auto;
            width: 100%;
            padding: 12px 0;
          }

          .ar-link::after {
            bottom: 8px;
          }

          .ar-cta {
            margin-top: 12px;
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;