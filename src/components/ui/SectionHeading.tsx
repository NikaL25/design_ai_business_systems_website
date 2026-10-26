import type { ReactNode } from "react"

import { Eyebrow } from "./Eyebrow"

export function SectionHeading({
  label,

  title,

  copy,
}: {
  label: string

  title: string

  copy?: string
}) {
  return (
    <div className="section-heading">
      <Eyebrow>{label}</Eyebrow>
      <h2>{title}</h2>
      {copy && <p className="lead">{copy}</p>}
    </div>
  )
}
