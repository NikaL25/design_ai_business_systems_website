import type { Service } from "@/types"

import { Arrow } from "@/components/ui/Arrow"

import { SectionHeading } from "@/components/ui/SectionHeading"

import { services } from "@/data/content"

export function Services() {
  return (
    <section className="section" id="services">
      <div className="section-inner">
        <SectionHeading
          label="Additional Services"
          title="Additional Services"
        />
        <div className="service-grid">
          {services.map((service, index) => (
            <a className="service-card" href={service.url} key={service.name}>
              <span className="service-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{service.name}</h3>
                <p>{service.tagline}</p>
              </div>
              <Arrow />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
