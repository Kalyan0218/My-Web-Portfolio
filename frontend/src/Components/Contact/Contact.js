import React, { useState } from "react";
import ContactLink from "./ContactLink";

const contactLinks = [
  { icon: "✉",  label: "Email",    value: "kalyannaicker18@gmail.com",                            href: "mailto:kalyannaicker18@gmail.com" },
  { icon: "☏",  label: "Phone",    value: "+27 076 603 2589",                                     href: "tel:+270766032589" },
  { icon: "in", label: "LinkedIn", value: "https://www.linkedin.com/in/kalyan-naicker-72624b208/", href: "https://www.linkedin.com/in/kalyan-naicker-72624b208/" },
  { icon: "GH", label: "GitHub",   value: "https://github.com/Kalyan0218",                        href: "https://github.com/Kalyan0218" },
];

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const INITIAL_FORM = { name: "", email: "", phone: "", message: "" };

function Contact() {
  const [formData, setFormData]   = useState(INITIAL_FORM);
  const [status, setStatus]       = useState("idle"); // idle | loading | success | error
  const [feedback, setFeedback]   = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFeedback(data.message || "Message sent! I'll be in touch soon.");
        setFormData(INITIAL_FORM);
      } else {
        setStatus("error");
        setFeedback(
          data.errors?.join(" ") ||
          data.message ||
          "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setFeedback("Could not reach the server. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="glass-card">
          <h2 className="title">CONTACT ME</h2>
          <p className="subtitle">
            I'm open to junior roles, freelance work, or collaborations.
            Whether it's a project idea or just a coffee chat about code — I'm in.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="ENTER YOUR NAME*"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === "loading"}
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="ENTER YOUR EMAIL*"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === "loading"}
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="phone"
                placeholder="PHONE NUMBER"
                value={formData.phone}
                onChange={handleChange}
                disabled={status === "loading"}
              />
            </div>

            <div className="input-group">
              <textarea
                name="message"
                placeholder="YOUR MESSAGE*"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status === "loading"}
              />
            </div>

            {feedback && (
              <p className={`form-feedback ${status === "success" ? "form-feedback--success" : "form-feedback--error"}`}>
                {feedback}
              </p>
            )}

            <button
              type="submit"
              className="submit-btn"
              disabled={status === "loading"}
            >
              {status === "loading" ? "SENDING…" : "SUBMIT"}
            </button>
          </form>

         
        </div>
      </div>
    </section>
  );
}

export default Contact;
