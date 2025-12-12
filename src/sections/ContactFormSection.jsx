import React, { useState } from "react";

const contactGridsCol = [
  {
    id: 1,
    title: "Ubres Oasis",
    desc: "text text text",
    src: "/assets/images/featured5.png",
    alt: "Ubres oasis living room",
  },
  {
    id: 2,
    title: "Cursed Calm",
    desc: "text text text",
    src: "/assets/images/featured6.png",
    alt: "Cursed calm living room",
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return false;
    }
    if (formData.message.length < 10) {
      setErrorMessage("Message must be at least 10 characters long.");
      setStatus("error");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const isSuccess = true;
          isSuccess ? resolve() : reject("Server connection failed");
        }, 1500);
      });

      console.log("Sent:", formData);
      setStatus("success");
      setFormData({ email: "", subject: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-section-container">
        <div className="contact-text-container">
          <h4>What Our Clients Say.</h4>
          <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit..."</p>
        </div>

        <div className="contact-left-side">
          {contactGridsCol.map((column) => (
            <div key={column.id} className="contact-grid-column">
              <img src={column.src} alt={column.alt} />
              <div className="contact-grid-text">
                <h4 className="contact-grid-text-header">{column.title}</h4>
                <p className="contact-grid-text-paragraph">{column.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-right-side">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h5>Let's Create Together!</h5>

            <div className="input-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                aria-label="Email Address"
                value={formData.email}
                onChange={handleChange}
                disabled={status === "loading"}
                className={
                  status === "error" && !formData.email ? "input-error" : ""
                }
                required
              />
            </div>

            <div className="input-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                aria-label="Subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={status === "loading"}
                required
              />
            </div>

            <div className="input-group">
              <textarea
                name="message"
                placeholder="Let's build the future!"
                aria-label="Message"
                value={formData.message}
                onChange={handleChange}
                disabled={status === "loading"}
                required
              ></textarea>
            </div>

            {status === "error" && (
              <p
                style={{
                  color: "red",
                  fontSize: "0.9rem",
                  marginBottom: "10px",
                }}
              >
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              className={`contact-submit-btn ${
                status === "loading" ? "loading" : ""
              }`}
              disabled={status === "loading" || status === "success"}
            >
              {status === "loading"
                ? "Sending..."
                : status === "success"
                ? "Sent!"
                : "Contact Us"}
            </button>

            {status === "success" && (
              <p style={{ color: "green", marginTop: "10px" }}>
                Thank you! We'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
