import type { Product } from "@/types"

import { Eyebrow } from "@/components/ui/Eyebrow"

export function ProductHero({ product }: { product: Product }) {
  return (
    <section className={`product-hero hero-${product.slug}`}>
      <div className="product-hero-inner">
        <div className="product-hero-copy">
          <a className="back-link" href="/">
            <span>←</span> Home / Products
          </a>
          <Eyebrow>AI Business Systems / {product.number}</Eyebrow>
          <h1>{product.name}</h1>
          <p>{product.tagline}</p>
        </div>
        <div className="product-visual" aria-hidden="true">
          <div className="visual-index">{product.number}</div>
          <div className="visual-line" />
          <img src="/header-symbol.png" alt="" />
        </div>
      </div>
    </section>
  )
}
