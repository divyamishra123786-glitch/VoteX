function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <form className="contact-form">
        <input
          type="text"
          placeholder="Enter Your Name"
        />

        <input
          type="email"
          placeholder="Enter Your Email"
        />

        <textarea
          rows="5"
          placeholder="Write Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;