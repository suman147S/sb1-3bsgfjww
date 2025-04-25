import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  height?: 'full' | 'large' | 'medium' | 'small';
  overlay?: 'light' | 'medium' | 'dark' | 'none';
  alignment?: 'left' | 'center' | 'right';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink = '/',
  height = 'large',
  overlay = 'medium',
  alignment = 'center',
}) => {
  // Height classes
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[70vh]',
    medium: 'min-h-[50vh]',
    small: 'min-h-[30vh]',
  };

  // Overlay classes
  const overlayClasses = {
    light: 'bg-black/30',
    medium: 'bg-black/50',
    dark: 'bg-black/70',
    none: '',
  };

  // Alignment classes
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div 
      className={`relative flex items-center ${heightClasses[height]}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`}></div>
      
      <div className="container-custom relative z-10 py-16">
        <div className={`flex flex-col ${alignmentClasses[alignment]} max-w-3xl mx-auto`}>
          <h1 className="text-white mb-4 drop-shadow-lg">{title}</h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md max-w-2xl">
              {subtitle}
            </p>
          )}
          
          {buttonText && (
            <Link 
              to={buttonLink} 
              className="btn btn-secondary self-center md:self-auto"
            >
              {buttonText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;