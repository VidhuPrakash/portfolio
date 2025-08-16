"use client"

import { useState } from 'react'
import Image from 'next/image'

interface AnimatedImageProps {
  src: string
  alt: string
  className?: string
}

export default function AnimatedImage({ src, alt, className = "" }: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative group ${className}`}>
    
      <div className="absolute -inset-4 bg-retro-frame rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      <div className="absolute -inset-2 bg-retro-frame-inner rounded-2xl" />
      

      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={src || "/placeholder.svg?height=500&width=400&query=retro futuristic developer portrait"}
          alt={alt}
          width={400}
          height={500}
          className={`w-full h-auto object-cover rounded-xl transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } group-hover:scale-105`}
          onLoad={() => setIsLoaded(true)}
        />
        
  
        <div className="absolute inset-0 bg-gradient-to-br from-retro-accent/10 to-retro-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
   
        <div className="absolute inset-0 bg-scanlines opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      </div>

      <div className="absolute -top-2 -right-2 w-4 h-4 bg-retro-accent rounded-full opacity-60" />
      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-retro-secondary rounded-full opacity-60" />
      <div className="absolute top-1/2 -right-3 w-2 h-2 bg-retro-tertiary rounded-full opacity-60" />
    </div>
  )
}
