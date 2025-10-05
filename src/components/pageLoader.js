import { useState, useEffect } from 'react';

const PageLoader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Complete loading when progress reaches 100
    const checkProgress = setInterval(() => {
      if (progress >= 100) {
        clearInterval(checkProgress);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setIsLoading(false);
            if (onLoadingComplete) onLoadingComplete();
          }, 600);
        }, 400);
      }
    }, 50);

    return () => {
      clearInterval(progressInterval);
      clearInterval(checkProgress);
      document.body.style.overflow = 'unset';
    };
  }, [progress, onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-all duration-600 font-poppins ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/images/raSPCHyipDfLOt7CM87r0EjJY.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Loading Content */}
      <div className="relative z-10 text-center text-white px-6">
        {/* Main Loading Text */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-light mb-3 tracking-wide">
            Sanchita
          </h1>
          <p className="text-sm md:text-base font-light tracking-wide text-zinc-400">
            Loading portfolio
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 md:w-64 mx-auto mb-4">
          <div className="h-px bg-zinc-800 overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>
          <div className="mt-3 text-xs font-light tracking-wide text-zinc-500">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;