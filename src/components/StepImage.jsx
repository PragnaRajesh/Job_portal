import React, { useState, useEffect, useRef } from 'react';

const StepImage = ({ 
  stepNumber, 
  src, 
  alt, 
  className = '', 
  animationType = 'progressive',
  triggerOnMount = false,
  threshold = 0.3,
  delay = 0
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const imageRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (triggerOnMount) {
      setTimeout(() => {
        setIsAnimating(true);
        setHasAnimated(true);
      }, delay);
      return;
    }

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsAnimating(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold: threshold,
        rootMargin: '20px'
      }
    );

    if (imageRef.current) {
      observerRef.current.observe(imageRef.current);
    }

    return () => {
      if (observerRef.current && imageRef.current) {
        observerRef.current.unobserve(imageRef.current);
      }
    };
  }, [triggerOnMount, hasAnimated, threshold, delay]);

  // Clean up observer on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!isAnimating) return '';

    switch (animationType) {
      case 'step':
        return `animate-step-${stepNumber}`;
      case 'progressive':
        return 'animate';
      case 'draw':
        return 'animate';
      default:
        return 'animate';
    }
  };

  const getContainerClass = () => {
    switch (animationType) {
      case 'step':
        return 'step-image-animated';
      case 'progressive':
        return 'step-image-progressive';
      case 'draw':
        return 'step-image-draw';
      default:
        return 'step-image-progressive';
    }
  };

  return (
    <div 
      ref={imageRef}
      className={`step-image-container ${getContainerClass()} ${getAnimationClass()} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="step-image object-contain"
        loading="lazy"
        onLoad={() => {
          // Ensure image is loaded before animation
          if (imageRef.current) {
            imageRef.current.style.opacity = '1';
          }
        }}
        style={{ opacity: 0, transition: 'opacity 0.2s ease-in-out' }}
      />
    </div>
  );
};

export default StepImage;
