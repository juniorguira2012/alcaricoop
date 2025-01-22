import { useState } from 'react'

export const useDetectedScroll = ({ scrollY }: { scrollY: number }) => {
    const [isScrollOvercome, setIsScrollOverCome] = useState(false)
    const isBrowser = typeof window !== 'undefined'

    if (isBrowser) {
        window.onscroll = () => {
            const SCROLL = document.documentElement.scrollTop
            if (SCROLL >= scrollY) setIsScrollOverCome(true)
            else setIsScrollOverCome(false)
        }
    }

    return { isScrollOvercome }
}
