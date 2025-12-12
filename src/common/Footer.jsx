import React from "react";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="left-side-footer">
          <h5 className="footer-header">Aura Spaces</h5>
          <p className="footer-paragraph">
            Creating spaces that breathe. Japandi design studio.
          </p>
          <div className="underline"></div>

          <ul className="footer-icons-list">
            <li className="footer-icon">
              <a href="#" target="_blank">
                <img src="assets/icons/linkedin.png" alt="LinkedIn" />
              </a>
            </li>
            <li className="footer-icon">
              <a href="#" target="_blank">
                <img src="assets/icons/instagram.png" alt="Instagram" />
              </a>
            </li>
            <li className="footer-icon">
              <a href="#" target="_blank">
                <img src="assets/icons/facebook.png" alt="Facebook" />
              </a>
            </li>
            <li className="footer-icon">
              <a href="https://github.com/idkowiaak" target="_blank">
                <img src="assets/icons/github.png" alt="GitHub" />
              </a>
            </li>
          </ul>
        </div>
        <div className="right-side-footer">
          <h6 className="right-side-footer-header">Explore legal</h6>
          <ul className="ride-side-footer-links">
            <li className="footer-links">
              <a href="#">Home</a>
            </li>
            <li className="footer-links">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="footer-links">
              <a href="#">Terms of Service</a>
            </li>
            <li className="footer-links">
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} @idkowiaak. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
