import { Header } from "@/components/layout/Header"

import { Footer } from "@/components/layout/Footer"

import { Arrow } from "@/components/ui/Arrow"

import { Eyebrow } from "@/components/ui/Eyebrow"

export default function NotFound() {
  return (
    <div className="page">
      <Header />
      <main className="not-found">
        <Eyebrow>404</Eyebrow>
        <h1>Page not found.</h1>
        <a className="button button-primary" href="/">
          Return Home <Arrow />
        </a>
      </main>
      <Footer />
    </div>
  )
}
