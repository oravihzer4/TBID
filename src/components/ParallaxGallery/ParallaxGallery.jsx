import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import "./ParallaxGallery.css";

function distributeToColumns(images) {
  const columns = [[], [], [], []];
  images.forEach((src, index) => {
    columns[index % 4].push({ src, index });
  });
  return columns;
}

function ParallaxColumn({
  items,
  y,
  columnClassName,
  projectName,
  onImageClick,
  staticLayout,
}) {
  return (
    <motion.div
      className={`parallax-gallery__column ${columnClassName}`}
      style={staticLayout ? undefined : { y }}
    >
      {items.map(({ src, index }) => (
        <button
          key={index}
          type="button"
          className="parallax-gallery__item"
          onClick={() => onImageClick(index)}
          aria-label={`View image ${index + 1}`}
        >
          <img src={src} alt={`${projectName} ${index + 1}`} loading="lazy" />
        </button>
      ))}
    </motion.div>
  );
}

function ParallaxGallery({ images, projectName, onImageClick }) {
  const galleryRef = useRef(null);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [isCompact, setIsCompact] = useState(false);
  const reduceMotion = useReducedMotion();

  const columns = useMemo(() => distributeToColumns(images), [images]);

  useEffect(() => {
    const update = () => {
      setViewportHeight(window.innerHeight);
      setIsCompact(window.matchMedia("(max-width: 768px)").matches);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  const staticLayout = reduceMotion || isCompact;
  const height = viewportHeight || 800;

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  const columnMotion = staticLayout ? [null, null, null, null] : [y1, y2, y3, y4];
  const columnClasses = [
    "parallax-gallery__column--1",
    "parallax-gallery__column--2",
    "parallax-gallery__column--3",
    "parallax-gallery__column--4",
  ];

  return (
    <section
      ref={galleryRef}
      className={`parallax-gallery ${staticLayout ? "parallax-gallery--static" : ""}`}
      aria-label={`${projectName} gallery`}
    >
      <div className="parallax-gallery__columns">
        {columns.map((items, columnIndex) =>
          items.length > 0 ? (
            <ParallaxColumn
              key={columnIndex}
              items={items}
              y={columnMotion[columnIndex]}
              columnClassName={columnClasses[columnIndex]}
              projectName={projectName}
              onImageClick={onImageClick}
              staticLayout={staticLayout}
            />
          ) : null,
        )}
      </div>
    </section>
  );
}

export default ParallaxGallery;
