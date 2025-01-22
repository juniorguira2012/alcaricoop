import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

interface useAnimation {
    duration?: number
}

export const useAnimation = ({ duration = 700 }: useAnimation) => {
    useEffect(() => {
        setTimeout(() => AOS.init({ duration }), 1000)
    }, [])
}
