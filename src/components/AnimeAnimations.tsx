
import { useEffect, useRef } from 'react';
import * as anime from 'animejs';

const AnimeAnimations = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section entrance animation
    anime({
      targets: '.hero-content',
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 1200,
      delay: anime.stagger(200),
      easing: 'easeOutExpo'
    });

    // Floating animation for the iOS screen
    anime({
      targets: '.ios-screen',
      translateY: [-10, 10],
      duration: 3000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });

    // Gradient text color animation
    anime({
      targets: '.gradient-text-animated',
      color: [
        { value: '#6366f1' },
        { value: '#8b5cf6' },
        { value: '#ec4899' },
        { value: '#f59e0b' },
        { value: '#10b981' },
        { value: '#6366f1' }
      ],
      duration: 4000,
      loop: true,
      easing: 'easeInOutQuad'
    });

    // Button hover animations
    const buttons = document.querySelectorAll('.anime-button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        anime({
          targets: button,
          scale: 1.05,
          duration: 300,
          easing: 'easeOutExpo'
        });
      });

      button.addEventListener('mouseleave', () => {
        anime({
          targets: button,
          scale: 1,
          duration: 300,
          easing: 'easeOutExpo'
        });
      });
    });

    // Social icons animation
    anime({
      targets: '.social-icon',
      rotate: 360,
      duration: 2000,
      delay: anime.stagger(100),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine'
    });

    // Scroll indicator pulse
    anime({
      targets: '.scroll-indicator',
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      duration: 2000,
      loop: true,
      easing: 'easeInOutSine'
    });

  }, []);

  return null; // This component only handles animations
};

export default AnimeAnimations;
