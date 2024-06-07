import React, { useState, useEffect } from 'react'
import anime from "animejs"
import { ThemeContextWrapper } from './ThemeContextWrapper'

const SplashScreen = ({ finishLoading }:any) => {
    const [isMounted, setIsMounted] = useState(false)
    const animate = () => {
      const loader =  anime.timeline({
        complete: () => finishLoading(),
      })
      loader.add({
        targets: '#logo',
        keyframes: [
          {translateY: -40},
          {translateX: 100},
          {translateY: 40},
          {translateX: 0},
          {translateY: 0}
        ],
        duration: 2000,
        easing: 'easeOutElastic(1, .8)',
      })
      .add({
        targets: '#logo',
        keyframes: [
          {translateY: -40},
          {translateX: 100},
          {translateY: 40},
          {translateX: 0},
          {translateY: 0}
        ],
        duration: 2000,
        easing: 'easeOutElastic(1, .8)',
      })



    }
  
    useEffect(() => {
      const timeout = setTimeout(() => setIsMounted(true), 10)
      animate()
      return () => clearTimeout(timeout)
    }, [])
  
    return (
        <ThemeContextWrapper>
            <div className="splashScreen">
                <h1 id="logo"> REST COUNTRIES</h1>
            </div>
        </ThemeContextWrapper>

    )
  }

export default SplashScreen
