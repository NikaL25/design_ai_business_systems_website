import type { Product } from "@/types"

import { ProductShell } from "@/components/products/ProductShell"

import { SectionHeading } from "@/components/ui/SectionHeading"

import { products } from "@/data/content"

export default function AgentMasterPage() {
  const product: Product = products[1]

  const paragraphs = [
    "Manage complex tasks through a single intelligent centre. AI Agent 1.0 Master brings specialised AI agents into a coordinated system: it distributes tasks, sequences actions and tracks progress.",

    "Its main advantage is coordinated oversight. Each agent handles its part of the shared task, while the system connects the stages, preserves context and helps move work towards your goal.",

    "You define the direction, rules and limits of autonomy. Key decisions remain under your control, while the system handles the coordination of recurring actions.",
  ]

  return (
    <ProductShell product={product}>
      <section className="section agent-overview" id="overview">
        <div className="section-inner">
          <SectionHeading label={product.name} title={product.tagline} />
          <div className="agent-sequence">
            {paragraphs.map((paragraph, index) => (
              <article className="agent-block" key={paragraph}>
                <div className="agent-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p>{paragraph}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </ProductShell>
  )
}
