import footerNightscape from '../assets/footer-nightscape.png'

const footerLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/916380691783' },
  { label: 'Instagram', href: 'https://www.instagram.com/sjm_electricals_/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
]

const serviceLinks = ['Industrial', 'Commercial', 'Residential']
const pageLinks = ['Home', 'About us', 'Projects', 'Contact']

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-fluid footer-content">
        <div>
          <h1 className="footer-eyebrow">SJM Electricals</h1>
          <p className="footer-note">Reliable power for every kind of space.</p>
        </div>
        <div className="footer-columns">
          <div className="footer-column">
            <span className="footer-column-title">Services</span>
            {serviceLinks.map((link) => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}
          </div>
          <div className="footer-column">
            <span className="footer-column-title">Contact</span>
            <a href="tel:+916380691783">+91 63806 91783</a>
            <a href="mailto:sjm.electricals@gmail.com">sjm.electricals@gmail.com</a>
          </div>
          <div className="footer-column">
            <span className="footer-column-title">Pages</span>
            {pageLinks.map((link) => <a key={link} href={link === 'Home' ? '#' : `#${link.toLowerCase().replace(' ', '-')}`}>{link}</a>)}
          </div>
          <div className="footer-column">
            <span className="footer-column-title">Socials</span>
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-art-wrap">
        <img src={footerNightscape} alt="A starry night landscape powered by SJM Electricals" />
      </div>
      <div className="container-fluid footer-bottom">
        <span>© 2026 SJM Electricals</span>
        <span>Built with ❤️ by hexTorq.</span>
      </div>
    </footer>
  )
}

export default Footer
