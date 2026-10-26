import { SectionHeading } from "@/components/ui/SectionHeading"

import { process as processSteps } from "@/data/content"

export function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="section-inner">
        <SectionHeading
          label="How It Works"
          title="From Business Problem to Working AI System."
        />
        <div className="process-grid">
          {processSteps.map(([title, copy], index) => (
            <article className="process-step" key={title}>
              <div className="step-marker">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
