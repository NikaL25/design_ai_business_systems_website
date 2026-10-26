import { Brand } from "./Brand"

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Brand />
          <p>Smarter Systems, Bigger Opportunities</p>
        </div>
        <div className="footer-contact">
          <span>Contact</span>
          <a href="https://wa.me/66984407304">WhatsApp +66 98 440 7304</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>AI BUSINESS SYSTEMS</span>
        <span>AI Business Systems Studio</span>
      </div>
    </footer>
  )
}
