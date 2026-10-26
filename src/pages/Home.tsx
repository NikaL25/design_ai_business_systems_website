import { Header } from "@/components/layout/Header"

import { Footer } from "@/components/layout/Footer"

import { ContactCta } from "@/components/contact/ContactCta"

import { Hero } from "@/components/sections/Hero"

import { Problem } from "@/components/sections/Problem"

import { Products } from "@/components/sections/Products"

import { Services } from "@/components/sections/Services"

import { Process } from "@/components/sections/Process"

import { SectionHeading } from "@/components/ui/SectionHeading"

import { InfoGrid } from "@/components/ui/InfoGrid"

import { audiences, outcomes, advantages } from "@/data/content"

export default function Home() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Products />
        <Services />
        <section className="section">
          <div className="section-inner">
            <SectionHeading
              label="Who It’s For"
              title="Built for Businesses Ready to Operate Smarter."
            />
            <InfoGrid items={audiences} />
          </div>
        </section>
        <section className="section">
          <div className="section-inner">
            <SectionHeading
              label="Business Outcomes"
              title="Less Friction. More Control. Better Business Performance."
            />
            <InfoGrid items={outcomes} />
          </div>
        </section>
        <Process />
        <section className="section">
          <div className="section-inner">
            <SectionHeading
              label="Why AI Business Systems"
              title="Built Around Your Business. Not Around a Template."
            />
            <InfoGrid items={advantages} />
          </div>
        </section>
        <ContactCta
          title="Build the System Your Business Actually Needs."
          copy="Tell us what is slowing your business down. We’ll map the right AI system around your goals, workflows and existing tools."
          label="Start a Project"
          url="https://wa.me/66984407304"
        />
      </main>
      <Footer />
    </div>
  )
}
