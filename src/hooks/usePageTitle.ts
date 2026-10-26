import { useEffect } from "react"

/**
 * Keeps the document title in sync with the current page and restores the
 * fallback title when the component unmounts.
 */

export function usePageTitle(title: string, fallback = "AI Business Systems") {
  useEffect(() => {
    document.title = `${title} — AI Business Systems`

    return () => {
      document.title = fallback
    }
  }, [title, fallback])
}
