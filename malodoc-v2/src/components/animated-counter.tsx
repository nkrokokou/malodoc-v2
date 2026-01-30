"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"

interface AnimatedCounterProps {
    end: number
    duration?: number
    suffix?: string
    prefix?: string
    decimals?: number
}

export function AnimatedCounter({
    end,
    duration = 2.5,
    suffix = "",
    prefix = "",
    decimals = 0,
}: AnimatedCounterProps) {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    })
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (inView && !hasAnimated) {
            setHasAnimated(true)
        }
    }, [inView, hasAnimated])

    return (
        <div ref={ref}>
            {hasAnimated ? (
                <CountUp
                    end={end}
                    duration={duration}
                    suffix={suffix}
                    prefix={prefix}
                    decimals={decimals}
                    separator=","
                />
            ) : (
                <span>0{suffix}</span>
            )}
        </div>
    )
}
