import { useState, useRef, useEffect } from 'react';
import ModelViewer from '../ModelViewer';

const leftImages = [
  {
    src: '/sensors/1.png',
    title: 'Solar Charge Controller',
    description:
      'Regulates power from solar panels to batteries, ensuring optimal charging and system protection.',
  },
  {
    src: '/sensors/2.png',
    title: 'Rain Sensor',
    description:
      'Measures precipitation levels and rainfall intensity for weather monitoring.',
  },
  {
    src: '/sensors/3.png',
    title: 'Warning Light',
    description:
      'Visual alert system that activates during emergencies or hazardous conditions.',
  },
  {
    src: '/sensors/4.png',
    title: 'Battery System',
    description:
      'Stores solar energy to power the buoy systems during nighttime or cloudy conditions.',
  },
];

const rightImages = [
  {
    src: '/sensors/5.png',
    title: 'Pressure Sensor',
    description:
      'Monitors atmospheric and water pressure changes for weather forecasting.',
  },
  {
    src: '/sensors/6.png',
    title: 'GPS Module',
    description:
      "Tracks the buoy's exact location and movement patterns in real-time.",
  },
  {
    src: '/sensors/7.png',
    title: 'Anemometer',
    description:
      'Measures wind speed and direction for meteorological data collection.',
  },
  {
    src: '/sensors/8.png',
    title: 'Water Quality Sensor',
    description:
      'Analyzes pH, salinity, temperature, and other water quality parameters.',
  },
];

export default function Prototype() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);

  // Function to duplicate content for infinite scroll
  const setupInfiniteScroll = (containerRef: React.RefObject<HTMLDivElement>, items: any[]) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const itemHeight = 112; // h-25 (100px) + gap-6 (24px) = 124px, but let's use 112px as approximation
    
    // Clear existing content
    container.innerHTML = '';
    
    // Create wrapper for seamless scrolling
    const wrapper = document.createElement('div');
    wrapper.className = 'flex flex-col gap-6';
    
    // Add three copies of the content for seamless looping
    for (let i = 0; i < 3; i++) {
      items.forEach((item, idx) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'group relative flex h-25 w-44 items-center justify-center rounded-xl border border-[#023E8A] bg-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl';
        itemDiv.setAttribute('data-index', `${i}-${idx}`);
        
        itemDiv.innerHTML = `
          <img src="${item.src}" alt="${item.title}" class="max-h-full max-w-full object-contain p-2" />
        `;
        
        // Add hover events for tooltips
        itemDiv.addEventListener('mouseenter', () => setActiveTooltip(`${containerRef === leftColumnRef ? 'left' : 'right'}-${i}-${idx}`));
        itemDiv.addEventListener('mouseleave', () => setActiveTooltip(null));
        
        wrapper.appendChild(itemDiv);
      });
    }
    
    container.appendChild(wrapper);
    
    // Set initial scroll position to the middle copy
    container.scrollTop = items.length * itemHeight;
    
    // Handle scroll events for infinite effect
    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      
      // If scrolled to the top of the first copy, jump to the middle
      if (scrollTop < items.length * itemHeight / 2) {
        container.scrollTop = scrollTop + items.length * itemHeight;
      }
      // If scrolled to the bottom of the last copy, jump to the middle
      else if (scrollTop > items.length * itemHeight * 1.5) {
        container.scrollTop = scrollTop - items.length * itemHeight;
      }
    };
    
    container.addEventListener('scroll', handleScroll);
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  };

  useEffect(() => {
    const leftCleanup = setupInfiniteScroll(leftColumnRef, leftImages);
    const rightCleanup = setupInfiniteScroll(rightColumnRef, rightImages);
    
    return () => {
      if (leftCleanup) leftCleanup();
      if (rightCleanup) rightCleanup();
    };
  }, []);

  // Render tooltips
  const renderTooltip = (containerType: 'left' | 'right', copyIndex: number, itemIndex: number) => {
    const items = containerType === 'left' ? leftImages : rightImages;
    const item = items[itemIndex];
    
    return (
      <div
        className={`absolute bottom-full left-1/2 z-50 mb-3 w-64 -translate-x-1/2 transform rounded-lg bg-[#023E8A] p-4 text-white shadow-xl transition-all duration-300 ${
          activeTooltip === `${containerType}-${copyIndex}-${itemIndex}`
            ? 'visible opacity-100'
            : 'invisible opacity-0'
        }`}
      >
        <h3 className="mb-1 text-lg font-bold">{item.title}</h3>
        <p className="text-sm">{item.description}</p>
        <div className="absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-8 border-r-8 border-b-0 border-l-8 border-t-[#023E8A] border-r-transparent border-l-transparent"></div>
      </div>
    );
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-2xl font-bold tracking-wide text-[#1E3A8A] sm:text-3xl md:text-5xl">
            THE X-STREAM PROTOTYPE
          </h2>
          <p className="max-w-8xl mx-auto pt-5 text-center leading-relaxed text-[#023E8A] sm:text-xl md:text-xl">
            The X-STREAM prototype showcases a solar-powered buoy model equipped with sensors for monitoring water levels,
            rainfall, wind speed, temperature, and humidity. It also demonstrates GPS tracking, siren alerts,
            and a real-time notification system and all integrated into a web-based dashboard for accessible and timely river monitoring.
          </p>
        </div>

        {/* DESKTOP VIEW LAYOUT */}
        <div className="relative flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12">
          {/* LEFT IMAGES - Infinite scroll */}
          <div 
            ref={leftColumnRef}
            className="hidden h-[500px] flex-col gap-6 overflow-y-auto overflow-x-hidden md:flex [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* Content is dynamically added via useEffect */}
          </div>

          {/* 3D MODEL VIEWER */}
          <div className="z-10 flex w-full max-w-sm items-center justify-center rounded-xl border border-[#023E8A] bg-white p-4 shadow-lg sm:max-w-md md:h-[500px] md:w-[400px]">
            <ModelViewer />
          </div>

          {/* RIGHT IMAGES - Infinite scroll */}
          <div 
            ref={rightColumnRef}
            className="hidden h-[500px] flex-col gap-6 overflow-y-auto overflow-x-hidden md:flex [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* Content is dynamically added via useEffect */}
          </div>
        </div>

        {/* Render tooltips outside the scroll containers */}
        <div className="hidden md:block">
          {/* Left tooltips */}
          {[0, 1, 2].map(copyIndex => 
            leftImages.map((_, itemIndex) => (
              <div key={`left-${copyIndex}-${itemIndex}`}>
                {renderTooltip('left', copyIndex, itemIndex)}
              </div>
            ))
          )}
          
          {/* Right tooltips */}
          {[0, 1, 2].map(copyIndex => 
            rightImages.map((_, itemIndex) => (
              <div key={`right-${copyIndex}-${itemIndex}`}>
                {renderTooltip('right', copyIndex, itemIndex)}
              </div>
            ))
          )}
        </div>

        {/* MOBILE VIEW LAYOUT */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 md:hidden">
          {[...leftImages, ...rightImages].map((item, idx) => (
            <div
              key={idx}
              className="group relative flex h-24 w-full items-center justify-center rounded-xl border border-gray-200 bg-white shadow-md"
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-16 w-16 object-contain"
              />

              <div className="invisible absolute -bottom-2 left-1/2 z-50 w-48 -translate-x-1/2 -translate-y-2 translate-y-full transform rounded-lg bg-[#023E8A] p-3 text-white opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-full group-hover:opacity-100">
                <h3 className="mb-1 text-sm font-bold">{item.title}</h3>
                <p className="text-xs">{item.description}</p>
                <div className="absolute -top-2 left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-0 border-r-8 border-b-8 border-l-8 border-r-transparent border-b-[#023E8A] border-l-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}