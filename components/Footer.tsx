"use client";

export default function Footer() {
  return (
    <footer id="contact" className="footer" role="contentinfo">
      <div className="footer__container">
        {/* Brand */}
        <div className="footer__brand">
          <h3 className="footer__logo">QuantumFlow</h3>
          <p className="footer__tagline">
            Intelligent workflow automation built for modern enterprises.
          </p>
        </div>

        {/* Links */}
        <nav className="footer__nav" aria-label="Footer Navigation">
          <div className="footer__column">
            <h4>Product</h4>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">API</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
        </nav>

        {/* Newsletter */}
        <div className="footer__newsletter">
          <h4>Stay Updated</h4>
          <p>Get product updates and automation insights.</p>

          <form className="newsletter-form">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} QuantumFlow. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}