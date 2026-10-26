import { resolveRoute } from "./router"

export default function App() {
  const Page = resolveRoute(window.location.pathname)

  return <Page />
}
