import "../styles/Contact.css";
function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="contact-content">
        <div>
          <h2>Let's Connect.</h2>
        </div>

        <p>Thank you for reaching this part.</p>
        <p>Portoflio currently underdevelopment</p>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/justine-john-montalbo-6ab6a42a8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:justinejohnmontalbo478@email.com">Email</a>
          <a href="public/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 JJ</p>
      </div>
    </footer>
  );
}

export default Contact;
