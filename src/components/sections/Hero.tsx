import { Arrow } from "@/components/ui/Arrow"

import { Eyebrow } from "@/components/ui/Eyebrow"

export function Hero() {
  return (
    <section className="home-hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <Eyebrow>Smarter Systems, Bigger Opportunities</Eyebrow>
          <h1>
            AI Systems Built to <em>Move Business Forward.</em>
          </h1>
          <p className="hero-lead">
            We design and build intelligent systems that connect sales,
            communication and operations — powered by AI, automation and
            integrations.
          </p>
          <div className="button-row">
            <a
              className="button button-primary"
              href="https://wa.me/66984407304"
            >
              Start a Project <Arrow />
            </a>
            <a className="button button-secondary" href="#products">
              Explore Solutions
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <img src="/hero-emblem.webp" alt="" />
        </div>
        <div className="principles">
          {["Strategy", "Automation", "Intelligence", "Growth", "Results"].map(
            (item) => (
              <span key={item}>{item}</span>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
