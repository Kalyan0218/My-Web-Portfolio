const ContactLink = ({ icon, label, value, href }) => (
  <a href={href} className="clink">
    <div className="clink-icon">{icon}</div>
    <div className="clink-body">
      <div className="clink-label">{label}</div>
      <div className="clink-val">{value}</div>
    </div>
    <div className="clink-arrow">→</div>
  </a>
);
export default ContactLink;