const Footer = () => (
  <footer className="footer">
    <div className="footer-copy">© 2026 · Built with HTML, CSS &amp; React</div>
    <div className="footer-links">
      {["GitHub", "LinkedIn", "Back to top ↑"].map((link) => (
        <a key={link} href={link === "GitHub" ? "https://github.com/Kalyan0218" : link === "LinkedIn" ? "https://www.linkedin.com/in/kalyan-naicker-72624b208/" : "#"} {...(link !== "Back to top ↑" && { target: "_blank", rel: "noopener noreferrer" })}>
          {link}
        </a>
      ))}
    </div>
  </footer>
);
export default Footer;