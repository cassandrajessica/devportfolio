import "../styles/contactpagestyles.css";
import { useState } from "react";
import emailjs from "emailjs-com";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_7fm4tp4", // service_ID
      "template_5jyc5yj", // template ID
      formData,
      "49n3pk4TfjQ-QoI0U" // public API key
    )
    .then(
      () => {
        alert("Message sent");
        setFormData({ name:'', email: '', message: ''});
      },
      (error) => {
        alert ('Failed to send message');
        console.error(error);
      }
    );
  };

  return (
    <>
      <div className="contactPageContainer">
        <h1>
          <em>Lets Stay Connected</em>
        </h1>
        <div className="innerContactPageContainer">
          <h2>Have Questions?</h2>
          <p>
            Feel free to reach out anytime! I'm always looking for new
            opportunities to grow.
          </p>


          <form onSubmit={sendEmail}>
            <div className="nameField">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="nameInput"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="emailField">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="emailInput"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="messageField">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                className="message"
                rows="10"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="sendBtn">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
