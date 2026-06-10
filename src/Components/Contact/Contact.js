import React from "react";
import { useState } from "react";

import ContactLink from "./ContactLink";

const contactLinks = [
  { icon: "✉", label: "Email",    value: "kalyannaicker18@gmail.com", href: "mailto:kalyannaicker18@gmail.com" },
  { icon: "☏", label: "Phone",    value: "+27 076 603 2589",        href: "tel:+270766032589"              },
  { icon: "in", label: "LinkedIn", value: "https://www.linkedin.com/in/kalyan-naicker-72624b208/", href: "https://www.linkedin.com/in/kalyan-naicker-72624b208/"                           },
  { icon: "GH", label: "GitHub",  value: "https://github.com/Kalyan0218",     href: "https://github.com/Kalyan0218"                            },
];

function Contact() {

//     return (
// <section id='contact'className="contact-section">
//     Get in touch
//     {/* <SectionEyebrow text="Get in touch" /> */}

//     <h2 className="contact-tagline">
//       Let's build<br /><em>something</em><br />together.
//     </h2>
//     <p className="contact-desc">
//       Open to junior roles, freelance work, or collaborations. Whether it's
//       a project idea or just a coffee chat about code — I'm in.
//     </p>

//     <div className="contact-links">
//       {contactLinks.map((link) => (
//         <ContactLink key={link.label} {...link} />
//       ))}
//     </div>

   
//   </section>
//     )

 const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id='contact'className="contact-section">
     
    <div className="contact-container">
      
      <div className="glass-card">
        
        <h2 className="title">CONTACT ME</h2>
        <p className="subtitle">
          I'm open to junior roles, freelance work, or collaborations. Whether it's a project idea or just a coffee chat about code — I'm in.
        </p>

        <form onSubmit={handleSubmit}>
         
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="ENTER YOUR NAME*"
              value={formData.name}
              onChange={handleChange}
              required
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
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              name="phone"
              placeholder="PHONE NUMBER"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <textarea
              name="message"
              placeholder="YOUR MESSAGE*"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
    </section>  
  );



}
export default Contact;