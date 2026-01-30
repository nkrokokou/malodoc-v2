"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
    name: string
    role: string
    content: string
    rating: number
    avatar: string
}

interface TestimonialsCarouselProps {
    testimonials: Testimonial[]
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState(0)

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    }

    const paginate = (newDirection: number) => {
        setDirection(newDirection)
        setCurrent((prev) => {
            if (newDirection === 1) {
                return prev === testimonials.length - 1 ? 0 : prev + 1
            } else {
                return prev === 0 ? testimonials.length - 1 : prev - 1
            }
        })
    }

    // Auto-advance every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1)
        }, 5000)
        return () => clearInterval(timer)
    }, [current])

    return (
        <div className="relative w-full max-w-4xl mx-auto px-4">
            <div className="relative h-[300px] flex items-center justify-center overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                        }}
                        className="absolute w-full"
                    >
                        <div className="glass-card p-8 md:p-12 text-center">
                            <div className="flex justify-center mb-4">
                                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                                    <Image
                                        src={testimonials[current].avatar}
                                        alt={testimonials[current].name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonials[current].rating
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "text-muted-foreground"
                                            }`}
                                    />
                                ))}
                            </div>
                            <p className="text-lg md:text-xl text-foreground mb-6 italic">
                                "{testimonials[current].content}"
                            </p>
                            <div>
                                <p className="font-bold text-foreground">{testimonials[current].name}</p>
                                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(-1)}
                    className="rounded-full"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > current ? 1 : -1)
                                setCurrent(index)
                            }}
                            className={`h-2 rounded-full transition-all ${index === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                                }`}
                        />
                    ))}
                </div>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(1)}
                    className="rounded-full"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
