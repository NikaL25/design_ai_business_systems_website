import type { Product } from "@/types"

import { ProductShell } from "@/components/products/ProductShell"

import { SectionHeading } from "@/components/ui/SectionHeading"

import { products } from "@/data/content"

export default function BusinessAppPage() {
  const product: Product = products[2]

  const appFeatures = [
    "CRM: customers, preferences and enquiry history.",

    "Orders and pipelines tailored to your industry’s processes.",

    "Tasks, owners, deadlines and a calendar.",

    "Communication through connected corporate channels.",

    "Proposals, documents and approvals.",

    "Tracking payments, expenses and outstanding balances.",

    "An AI assistant for drafts, summaries and working with information.",

    "Role-based access for your team.",
  ]

  return (
    <ProductShell product={product}>
      <section className="section app-intro" id="overview">
        <div className="section-inner narrow-copy">
          <p className="intro-statement">
            We build applications around your industry and company’s needs: from
            the first customer enquiry to order fulfilment and tracking
            payments.
          </p>
        </div>
      </section>
      <section className="section alt-section app-reach">
        <div className="section-inner editorial-grid">
          <SectionHeading
            label={product.name}
            title="YOUR BUSINESS IS ALWAYS WITHIN REACH"
          />
          <p className="editorial-copy">
            Check orders, assign a task, reply to a customer and see where a
            decision is needed — from your phone. Employees work in a shared
            system, while managers see the state of the business without
            constantly collecting updates from chat threads.
          </p>
        </div>
      </section>
      <section className="section app-features">
        <div className="section-inner">
          <SectionHeading label={product.name} title="IN ONE APPLICATION" />
          <div className="app-feature-grid">
            {appFeatures.map((feature, index) => (
              <article key={feature}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{feature}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section alt-section app-industry">
        <div className="section-inner editorial-grid">
          <SectionHeading
            label={product.name}
            title="BUILT FOR YOUR INDUSTRY"
          />
          <div className="editorial-copy">
            <p>
              Concierge, rentals, services, an agency or another business — the
              feature set follows how you work. We configure the fields, stages,
              rules and integrations you need, with room for future expansion.
            </p>
            <p>
              Android and iOS for working from your phone. A web version for
              working at your computer. Shared data and processes.
            </p>
          </div>
        </div>
      </section>
    </ProductShell>
  )
}
