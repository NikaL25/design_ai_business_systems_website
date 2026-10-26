import type { ComponentType } from "react"

import Home from "./pages/Home"

import NotFound from "./pages/NotFound"

import SalesManagerPage from "./pages/products/SalesManager"

import AgentMasterPage from "./pages/products/AgentMaster"

import BusinessAppPage from "./pages/products/BusinessApp"

import AutonomousSystemPage from "./pages/products/AutonomousSystem"

export type Route = {
  path: string

  component: ComponentType
}

export const routes: Route[] = [
  { path: "/", component: Home },

  { path: "/products/sales-manager", component: SalesManagerPage },

  { path: "/products/ai-agent-master", component: AgentMasterPage },

  { path: "/products/business-app", component: BusinessAppPage },

  {
    path: "/products/autonomous-business-system",
    component: AutonomousSystemPage,
  },
]

/**
 * Resolves the pathname to a page component. Trailing slashes are normalised so
 * `/products/sales-manager/` matches `/products/sales-manager`. Falls back to
 * the 404 page for anything that does not match a defined route.
 */

export function resolveRoute(pathname: string): ComponentType {
  const normalized = pathname.replace(/\/+$/, "") || "/"

  const route = routes.find((route) => route.path === normalized)

  return route ? route.component : NotFound
}
