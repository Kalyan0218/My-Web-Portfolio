const Footer = () => (
  <footer className="footer">
    <div className="footer-copy">© 2026 · Built with HTML, CSS &amp; React</div>
    <div className="footer-links">
      <a href="https://github.com/Kalyan0218" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/kalyan-naicker-72624b208/" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <button
        type="button"
        className="footer-link-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top ↑
      </button>
    </div>
  </footer>
);
export default Footer;