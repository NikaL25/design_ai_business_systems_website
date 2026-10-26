import type { Product } from "@/types"

import { ProductShell } from "@/components/products/ProductShell"

import { SectionHeading } from "@/components/ui/SectionHeading"

import { products } from "@/data/content"

export default function AutonomousSystemPage() {
  const product: Product = products[3]

  const departments = [
    [
      "MANAGEMENT AND CONTROL",

      "Connects goals, priorities and departmental work. Tracks results and risks, bringing important decisions under your oversight.",
    ],

    [
      "SALES",

      "Organises the path from finding a prospect to a deal: qualification, communication, proposals and follow-ups.",
    ],

    [
      "MARKETING",

      "Analyses the market and your audience, helps shape positioning, prepare content and campaigns, and pass signals of interest to sales.",
    ],

    [
      "OPERATIONS AND DELIVERY",

      "Turns agreed commitments into a work plan: allocates tasks and resources, tracks deadlines, checks quality and the handover of results.",
    ],
  ]

  return (
    <ProductShell product={product}>
      <section className="section autonomous-overview" id="overview">
        <div className="section-inner">
          <p className="intro-statement">
            Connect the key areas of your business in one system, with each
            department responsible for its own results:
          </p>
          <div className="department-grid">
            {departments.map(([title, copy], index) => (
              <article key={title}>
                <div className="department-heading">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{title}</h2>
                </div>
                <p>{copy}</p>
              </article>
            ))}
            <div className="system-core" aria-hidden="true">
              <img src="/header-symbol.png" alt="" />
              <span>One coordinated system</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section main-advantage">
        <div className="section-inner editorial-grid">
          <SectionHeading label={product.name} title="THE MAIN ADVANTAGE" />
          <div className="editorial-copy">
            <p>
              Departments work with shared data and pass tasks to one another
              without losing context. This reduces manual coordination and helps
              you oversee the entire journey — from the first signs of demand to
              meeting commitments to the customer.
            </p>
            <p>
              You set goals and limits of autonomy. The system organises
              day-to-day work, while key decisions remain yours.
            </p>
          </div>
        </div>
      </section>
    </ProductShell>
  )
}
