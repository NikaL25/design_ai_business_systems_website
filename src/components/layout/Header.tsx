import { useState } from "react"

import { Brand } from "./Brand"

export function Header({ productPage = false }: { productPage?: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Menu</span>
        </button>
        <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"}>
          {productPage ? (
            <>
              <a href="/">Home / Products</a>
              <a href="#overview">Overview</a>
            </>
          ) : (
            <>
              <a href="#products">Products</a>
              <a href="#services">Services</a>
              <a href="#process">Process</a>
            </>
          )}
          <a className="nav-cta" href="https://wa.me/66984407304">
            Start a Project
          </a>
        </nav>
      </div>
    </header>
  )
}
