/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Button } from '../Common/Button';
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react';

import GetStartedModal from '../Common/modals/GetStartedModal';
import LearnMoreModal from '../Common/modals/LearnMoreModal';

import API_BASE_URL from '../config/coreApi';

interface SliderAttributes {
  title: string;
  description: string;
  image: string;
  isArchive?: boolean | number | string;
}

interface SliderData {
  id: number;
  attributes: SliderAttributes;
}

export default function Slider() {
  const [slides, setSlides] = useState<SliderData[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  // Modals
  const [openGetStarted, setOpenGetStarted] = useState(false);
  const [openLearnMore, setOpenLearnMore] = useState(false);

  const fetchSliders = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/public-sliders`, {
        headers: {
          Accept: 'application/json',
        },
      });

      const data = await res.json();

      if (res.ok && Array.isArray(data.data)) {
        // Optional: filter archived sliders
        const activeSliders = data.data.filter(
          (item: SliderData) => !item.attributes.isArchive,
        );

        setSlides(activeSliders);
      } else {
        console.error('Failed fetching sliders:', data);
      }
    } catch (err) {
      console.error('Error fetching sliders:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSliders();
  }, []);

  /* =======================
     Slider Controls
  ======================= */
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  /* =======================
     States
  ======================= */
  if (loading) {
    return (
      <div className="w-full text-center py-24 text-gray-500">
        Loading slider...
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div className="w-full text-center py-24 text-xl font-semibold">
        No slider data available.
      </div>
    );
  }

  const active = slides[currentSlide].attributes;

  /* =======================
     Render
  ======================= */
  return (
    <>
      <section className="relative right-1/2 left-1/2 -mr-[50vw] -ml-[50vw] w-screen bg-[#FFFFF]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* LEFT CONTENT */}
            <div className="mb-10 md:mb-0 md:w-1/2 pr-8 max-w-xl">
              <h1 className="mb-4 text-4xl leading-tight font-bold text-[#023E8A] md:text-5xl lg:text-5xl dark:text-white break-words">
                {active.title}
              </h1>

              <p className="mb-8 text-lg text-[#000000] md:text-xl dark:text-gray-300 break-words">
                {active.description}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button onClick={() => setOpenGetStarted(true)}>
                  Get Started
                </Button>

                <Button
                  variant="outline"
                  onClick={() => setOpenLearnMore(true)}
                >
                  <span className="flex items-center">
                    Learn More
                    <ArrowRightIcon size={18} className="ml-2" />
                  </span>
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="relative w-full md:w-1/2">
              <div className="relative h-[300px] min-h-[300px] overflow-hidden rounded-lg shadow-xl md:h-[400px]">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slide.attributes.image}
                      alt={slide.attributes.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#386742]/20 to-transparent"></div>
                  </div>
                ))}

                {/* Prev Button */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-[#453EFE] hover:bg-white dark:bg-gray-900/70 dark:hover:bg-gray-900"
                >
                  <ChevronLeftIcon size={24} />
                </button>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/70 p-2 text-[#453EFE] hover:bg-white dark:bg-gray-900/70 dark:hover:bg-gray-900"
                >
                  <ChevronRightIcon size={24} />
                </button>

                {/* Indicators */}
                <div className="absolute right-0 bottom-4 left-0 flex justify-center space-x-2">
                  {slides.map((_slide, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-3 w-3 rounded-full ${
                        index === currentSlide ? 'bg-[#453EFE]' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <GetStartedModal
                  open={openGetStarted}
                  onClose={() => setOpenGetStarted(false)}
                />

                <LearnMoreModal
                  open={openLearnMore}
                  onClose={() => setOpenLearnMore(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <GetStartedModal
        open={openGetStarted}
        onClose={() => setOpenGetStarted(false)}
      />

      <LearnMoreModal
        open={openLearnMore}
        onClose={() => setOpenLearnMore(false)}
      />
    </>
  );
}
