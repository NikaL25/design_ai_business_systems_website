import { useEffect } from "react"

import type { ReactNode } from "react"

import type { Product } from "@/types"

import { Header } from "@/components/layout/Header"

import { Footer } from "@/components/layout/Footer"

import { ProductHero } from "@/components/products/ProductHero"

import { ContactCta } from "@/components/contact/ContactCta"

import { usePageTitle } from "@/hooks/usePageTitle"

export function ProductShell({
  product,

  children,
}: {
  product: Product

  children: ReactNode
}) {
  usePageTitle(product.name)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  return (
    <div className={`page product-page product-${product.slug}`}>
      <Header productPage />
      <main>
        <ProductHero product={product} />
        {children}
        <ContactCta
          title="Discuss Your Business Idea"
          label="Discuss Your Business Idea"
          url={product.ctaUrl}
          eyebrow={product.name}
        />
      </main>
      <Footer />
    </div>
  )
}
