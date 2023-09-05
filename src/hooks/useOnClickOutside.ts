import { delay } from '../lib/utils'
import { RefObject, useEffect } from 'react'

type Event = MouseEvent | TouchEvent

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  // eslint-disable-next-line no-unused-vars
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = async (event: Event) => {
      const el = ref?.current
      if (!el || el.contains((event?.target as Node) || null)) {
        return
      }
      await delay(100)
      handler(event) // Call the handler only if the click is outside of the element passed.
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler]) // Reload only if ref or handler changes
}
