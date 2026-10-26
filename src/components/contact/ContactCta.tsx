import type { ReactNode } from "react"

import { Arrow } from "@/components/ui/Arrow"

import { Eyebrow } from "@/components/ui/Eyebrow"

export function ContactCta({
  title,

  copy,

  label,

  url,

  eyebrow = "START A PROJECT",
}: {
  title: string

  copy?: string

  label: string

  url: string

  eyebrow?: string
}) {
  return (
    <section className="contact-cta" id="contact">
      <div className="contact-inner">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
        <a className="button button-primary" href={url}>
          {label} <Arrow />
        </a>
        <span className="contact-number">WhatsApp +66 98 440 7304</span>
      </div>
    </section>
  )
}
