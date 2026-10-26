import type { Product } from "@/types"

import { Arrow } from "@/components/ui/Arrow"

import { SectionHeading } from "@/components/ui/SectionHeading"

import { products } from "@/data/content"

export function Products() {
  return (
    <section className="section alt-section" id="products">
      <div className="section-inner">
        <SectionHeading
          label="Products"
          title="AI Systems Built Around Business Outcomes."
        />
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.slug}>
              <div className="product-card-top">
                <span className="card-number">{product.number}</span>
                <span className="status-dot">Product</span>
              </div>
              <h3>{product.name}</h3>
              <p>{product.tagline}</p>
              <a href={product.url}>
                Learn More <Arrow />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
