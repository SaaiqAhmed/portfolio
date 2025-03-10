import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import "./slides.css";

interface SlideData {
  id: number;
  title: string;
  description: string;
}
interface SlideProps {
    slide: SlideData;
    isActive: boolean;
    onActivate: () => void;
  }

const slidesData: SlideData[] = [
  {
    id: 1,
    title: "Authowrite",
    description: "This is the description for slide one.",
  },
  {
    id: 2,
    title: "Wardrobe",
    description: "Details and more information for slide two.",
  },
  {
    id: 3,
    title: "Rental Market Forecasting",
    description: "Additional content for slide three.",
  },
  {
    id: 4,
    title: "Industry Partner Dashboard ",
    description: "Additional content for slide four.",
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description: "Additional content for slide five.",
  },
  {
    id: 6,
    title: "Meal Quest",
    description: "Additional content for slide six.",
  }
];

// Animation variants for active versus inactive slides.
const slideVariants: Variants = {
  active: {
    width: "90%", // Active slide expands.
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  inactive: {
    width: "3.5%", // Inactive slides remain narrow.
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

// Slide component with forwarded ref for scrolling calculations.
const Slide = React.forwardRef<HTMLDivElement, SlideProps>(
  ({ slide, isActive, onActivate }, ref) => {
    return (
      <motion.div
        className="slide"
        ref={ref}
        variants={slideVariants}
        animate={isActive ? "active" : "inactive"}
        onClick={onActivate}
        initial={{opacity: 0.5, translateX: 100}}
        whileInView={{opacity: 1, translateX: 0}}
        transition={{duration: 2, type: "spring", stiffness: 100, damping: 10}}
      >
        <div className="slide-content">
          <h2
            className="slide-title"
            style={{
              writingMode: isActive ? "horizontal-tb" : "vertical-lr",
              textAlign: "center",
            }}
          >
            {slide.title}
          </h2>
          {isActive && <p className="slide-description">{slide.description}</p>}
        </div>
      </motion.div>
    );
  }
);
Slide.displayName = "Slide";

const SlidesSection: React.FC = () => {
  // Track the active slide index.
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // Debounce wheel events.
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  // Reference to the container element.
  const containerRef = useRef<HTMLDivElement>(null);
  // References to individual slide DOM elements.
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Scroll the container so that the active slide is in view.
  const scrollToActiveSlide = useCallback(() => {
    const currentSlide = slideRefs.current[activeIndex];
    if (currentSlide && containerRef.current) {
      containerRef.current.scrollTo({
        left: currentSlide.offsetLeft,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    scrollToActiveSlide();
  }, [activeIndex, scrollToActiveSlide]);

  // Handle the mouse wheel events.
  const handleWheel = useCallback((event: WheelEvent) => {
    // Prevent the default scrolling behavior.
    event.preventDefault();
    event.stopPropagation();

    if (isScrolling) return;

    setIsScrolling(true);
    if (event.deltaY > 0) {
      // Scrolling down: move to the next slide, or loop to the start.
      setActiveIndex((prev) => (prev + 1) % slidesData.length);
    } else if (event.deltaY < 0) {
      // Scrolling up: move to the previous slide, or loop to the end.
      setActiveIndex((prev) =>
        (prev - 1 + slidesData.length) % slidesData.length
      );
    }
    // Cooldown period to avoid rapid-fire slide changes.
    setTimeout(() => {
      setIsScrolling(false);
    }, 600);
  }, [isScrolling]);

  // Attach the wheel event listener with { passive: false }.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  return (
    <div
      className="slides-container"
      ref={containerRef}
      style={{
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        scrollBehavior: "smooth",
      }}
    >
      <div className="slides-wrapper" style={{ display: "flex" }}>
        {slidesData.map((slide, index) => (
          <Slide
            key={slide.id}
            slide={slide}
            isActive={activeIndex === index}
            onActivate={() => setActiveIndex(index)}
            ref={(el) => (slideRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlidesSection;
