import type { Product } from "@/types"

import { ProductShell } from "@/components/products/ProductShell"

import { SectionHeading } from "@/components/ui/SectionHeading"

import { products } from "@/data/content"

export default function SalesManagerPage() {
  const product: Product = products[0]

  const features = [
    [
      "B2B Prospecting",

      "Find companies that could benefit from your product or service.",
    ],

    [
      "Contact Verification",

      "Verify addresses and remove duplicates before starting work with a prospect.",
    ],

    [
      "Personalised Proposals",

      "Prepare outreach informed by the company and its needs.",
    ],

    [
      "A Unified Sales Process",

      "Bring prospecting, contact verification and proposal preparation into one manageable sequence.",
    ],

    [
      "Interaction History",

      "Keep customer information and records of completed actions so you can continue from the right stage.",
    ],

    [
      "Action Controls",

      "Set limits and retain control over the system’s outbound actions.",
    ],
  ]

  return (
    <ProductShell product={product}>
      <section className="section product-overview" id="overview">
        <div className="section-inner">
          <SectionHeading label={product.name} title={product.tagline} />
          <div className="sales-flow">
            {features.map(([title, copy], index) => (
              <article className="sales-stage" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{title}</h2>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </ProductShell>
  )
}
